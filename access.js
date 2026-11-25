/* Acesso demonstrativo, sem autenticação: não usar senhas reais ou dados sensíveis. */
(()=>{'use strict';
const K='fluxocontabil_demo_profiles_v5', S='fluxocontabil_demo_session_v5';
const gate=document.getElementById('accessGate'), app=document.getElementById('app'), pane=document.getElementById('accessPane');
let tab='visitor';
function accounts(){try{const x=JSON.parse(localStorage.getItem(K)||'[]');return Array.isArray(x)?x:[]}catch{return []}}
function safe(s){return String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
function showApp(mode,label,route=true,accountId=null){
 sessionStorage.setItem(S,JSON.stringify({mode,label,...(accountId?{accountId}:{})}));gate.hidden=true;app.hidden=false;
 document.getElementById('accessSwitch').title='Sair do modo '+label;
 if(route)history.pushState({fluxoView:'app',section:'dashboard'},'','#dashboard');
 window.dispatchEvent(new CustomEvent('fluxo-app-open',{detail:{section:'dashboard'}}));
}
function showGate(route=true){
 sessionStorage.removeItem(S);app.hidden=true;gate.hidden=false;render();
 if(route)history.pushState({fluxoView:'gate'},'','#acesso');
}
async function digest(password,salt){
 if(!crypto?.subtle)throw Error('Para usar senha demonstrativa, abra por HTTPS ou localhost.');
 const bytes=await crypto.subtle.digest('SHA-256',new TextEncoder().encode(salt+'|'+password));
 return Array.from(new Uint8Array(bytes),b=>b.toString(16).padStart(2,'0')).join('');
}
function salt(){return Array.from(crypto.getRandomValues(new Uint8Array(16)),b=>b.toString(16).padStart(2,'0')).join('');}
function render(){document.querySelectorAll('[data-access-tab]').forEach(b=>b.classList.toggle('selected',b.dataset.accessTab===tab));
 if(tab==='visitor')pane.innerHTML='<p class="access-help">Modo teste: alterne livremente entre os perfis fictícios de Gestor e Contador, sem criar uma conta.</p><button class="access-primary" id="visitorGo" type="button">Experimentar como visitante →</button>';
 else if(tab==='login')pane.innerHTML='<form id="demoLogin"><label class="access-label" for="loginEmail">Identificador ou e-mail demonstrativo</label><input id="loginEmail" name="email" class="access-input" autocomplete="off" placeholder="Identificador cadastrado neste navegador" required maxlength="100"><label class="access-label" for="loginPass">Senha de teste</label><input id="loginPass" name="password" type="password" class="access-input" autocomplete="current-password" minlength="6" required placeholder="Sua senha fictícia"><p class="access-help">Demonstração local, sem autenticação real. Não use suas senhas pessoais.</p><div id="accessError" class="access-error" role="alert"></div><button class="access-primary" type="submit">Entrar na minha conta de teste</button></form>';
 else pane.innerHTML='<form id="demoRegister"><label class="access-label" for="regName">Nome de demonstração</label><input id="regName" name="name" class="access-input" autocomplete="off" placeholder="Ex.: Participante teste" minlength="2" maxlength="55" required><label class="access-label" for="regEmail">Identificador (pode ser fictício)</label><input id="regEmail" name="email" class="access-input" autocomplete="off" placeholder="Ex.: visitante01" minlength="3" maxlength="100" required><label class="access-label" for="regPass">Crie uma senha de teste</label><input id="regPass" name="password" type="password" class="access-input" autocomplete="new-password" minlength="6" maxlength="100" required placeholder="Mínimo de 6 caracteres"><label class="access-label" for="regConfirm">Confirmar senha</label><input id="regConfirm" name="confirm" type="password" class="access-input" autocomplete="new-password" minlength="6" required placeholder="Repita a senha"><p class="access-help">Use apenas identificador e senha fictícios. Os dados são locais e não oferecem segurança real.</p><div id="accessError" class="access-error" role="alert"></div><button class="access-primary" type="submit">Criar perfil demonstrativo</button></form>';
 updateInstall();}
function error(txt){const el=document.getElementById('accessError');if(el)el.textContent=txt}
function installed(){return matchMedia('(display-mode: standalone)').matches||navigator.standalone===true}
function updateInstall(){let b=document.getElementById('installTrigger');if(!b)return;if(installed()){document.getElementById('installPanel').hidden=true;return;}b.textContent=window.fluxoInstallEvent?'Instalar aplicativo':'Como instalar';}
document.addEventListener('click',e=>{const b=e.target.closest('[data-access-tab]');if(b){tab=b.dataset.accessTab;render();}if(e.target.id==='visitorGo')showApp('visitor','Visitante');if(e.target.id==='accessSwitch')showGate();if(e.target.id==='installTrigger')install();});
document.addEventListener('submit',async ev=>{
 if(!['demoRegister','demoLogin'].includes(ev.target.id))return;
 ev.preventDefault();
 const f=new FormData(ev.target), id=String(f.get('email')||'').trim().toLowerCase(),pw=String(f.get('password')||'');
 if(ev.target.id==='demoRegister'){
  const name=String(f.get('name')||'').trim();
  if(name.length<2||id.length<3)return error('Revise nome e identificador.');
  if(pw.length<6||pw!==String(f.get('confirm')||''))return error('A senha precisa ter pelo menos 6 caracteres e coincidir com a confirmação.');
  const list=accounts(),old=list.find(x=>x.id===id);
  if(old?.hash)return error('Este identificador já existe. Use Entrar.');
  try {
   const s=salt(),hash=await digest(pw,s);
   if(old)Object.assign(old,{name,salt:s,hash});
   else list.push({id,name,salt:s,hash});
   localStorage.setItem(K,JSON.stringify(list));showApp('local',name,true,id);
  }catch(ex){error(ex.message||'Não foi possível registrar a senha.');}
 }else{
  const profile=accounts().find(x=>x.id===id);
  if(!profile)return error('Perfil não encontrado. Cadastre-se ou entre como visitante.');
  if(!profile.hash)return error('Perfil anterior sem senha: use Cadastrar-se com o mesmo identificador para criar uma senha de teste.');
  try{
   if(await digest(pw,profile.salt)!==profile.hash)return error('Identificador ou senha incorretos.');
   showApp('local',profile.name,true,profile.id);
  }catch(ex){error(ex.message||'Não foi possível verificar a senha.');}
 }
});
window.addEventListener('popstate',ev=>{
 if(ev.state?.fluxoView==='app' && sessionStorage.getItem(S)){
  gate.hidden=true;app.hidden=false;
  window.dispatchEvent(new CustomEvent('fluxo-route-pop',{detail:{section:ev.state.section||'dashboard'}}));
 }else{
  sessionStorage.removeItem(S);gate.hidden=false;app.hidden=true;render();
 }
});
async function install(){if(window.fluxoInstallEvent){const event=window.fluxoInstallEvent;window.fluxoInstallEvent=null;await event.prompt();updateInstall();return;}const ios=/iphone|ipad|ipod/i.test(navigator.userAgent);const el=document.getElementById('installHelp');if(el){el.remove();return;}const div=document.createElement('div');div.id='installHelp';div.className='install-info';div.textContent=ios?'No iPhone/iPad, abra este site no Safari, toque no botão Compartilhar e escolha “Adicionar à Tela de Início”. A instalação não pode ser iniciada automaticamente pelo site.':'No Android, abra no Chrome e procure “Instalar aplicativo” ou “Adicionar à tela inicial” no menu. Quando o Chrome disponibilizar a instalação direta, este botão mudará para “Instalar aplicativo”.';document.getElementById('installPanel').after(div);}
window.addEventListener('fluxo-install-ready',updateInstall);window.addEventListener('appinstalled',()=>{window.fluxoInstallEvent=null;updateInstall();});
const saved=(()=>{try{return JSON.parse(sessionStorage.getItem(S)||'null')}catch{return null}})();
history.replaceState({fluxoView:'gate'},'','#acesso');
if(saved?.mode==='visitor')showApp('visitor','Visitante');
else if(saved?.mode==='local'&&saved.accountId&&accounts().some(x=>x.id===saved.accountId&&x.name===saved.label))showApp('local',saved.label,true,saved.accountId);
else showGate(false);
})();
