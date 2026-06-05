const STORAGE_KEY="amtassist_lang";
const FIELDS={steueridentifikationsnummer:{format:"XXXXXXXXXXX (11 Ziffern)",de:"Ihre 11-stellige Steuer-ID vom Finanzamt.",en:"Your 11-digit tax ID from the Finanzamt.",regex:/steuer.?id|steuer.?identifikation|tin/i},steuernummer:{format:"XX/XXX/XXXXX",de:"Ihre persönliche Steuernummer vom zuständigen Finanzamt.",en:"Your personal tax number from your local Finanzamt.",regex:/steuernummer|steuernr/i},sozialversicherungsnummer:{format:"XXXXXXXXXX (12)",de:"12-stellige SVNR auf Ihrer Versicherungskarte.",en:"12-digit social security number.",regex:/sozialversicherung|svnr/i},postleitzahl:{format:"XXXXX",de:"Ihre 5-stellige Postleitzahl.",en:"Your 5-digit postal code.",regex:/postleitzahl|plz|postal/i},geburtsdatum:{format:"TT.MM.JJJJ",de:"Ihr Geburtsdatum im Format TT.MM.JJJJ.",en:"Date of birth DD.MM.YYYY.",regex:/geburtsdatum|birth.?date/i},familienstand:{format:"ledig|verheiratet|geschieden",de:"Ihr Familienstand.",en:"Your marital status.",regex:/familienstand|marital/i},aufenthaltstitel:{format:"z.B. §18a AufenthG",de:"Ihr aktueller Aufenthaltstitel.",en:"Your current residence permit.",regex:/aufenthalts.?titel|residence.?permit/i},bruttoeinkommen:{format:"EUR z.B. 3500,00",de:"Ihr Bruttogehalt vor Steuerabzügen.",en:"Gross salary before deductions.",regex:/brutto.?einkommen|brutto.?gehalt|gross.?income/i}};
let currentLang="de";
document.addEventListener("DOMContentLoaded",async()=>{
  const stored=await chrome.storage.local.get(STORAGE_KEY);
  currentLang=stored[STORAGE_KEY]||"de";
  updateLangButtons();
  document.querySelectorAll(".lang-btn").forEach(btn=>{
    btn.addEventListener("click",()=>{
      currentLang=btn.dataset.lang;
      chrome.storage.local.set({[STORAGE_KEY]:currentLang});
      updateLangButtons();
      sendToActiveTab({type:"SET_LANG",lang:currentLang});
    });
  });
  document.getElementById("scanBtn").addEventListener("click",()=>sendToActiveTab({type:"SCAN"}));
  const searchInput=document.getElementById("fieldSearch");
  const resultBox=document.getElementById("searchResult");
  searchInput.addEventListener("input",()=>{
    const q=searchInput.value.trim().toLowerCase();
    if(!q){resultBox.classList.add("hidden");return;}
    let found=null;
    for(const[key,data]of Object.entries(FIELDS)){if(data.regex.test(q)||key.includes(q)){found={key,data};break;}}
    if(found){resultBox.innerHTML=`<div class="sr-key">${found.key}</div><div class="sr-format">${found.data.format}</div><div class="sr-text">${found.data[currentLang]}</div>`;}
    else{resultBox.innerHTML=`<div class="sr-not-found">Kein Feld für „${q}"</div>`;}
    resultBox.classList.remove("hidden");
  });
  updateStatus();
});
function updateLangButtons(){document.querySelectorAll(".lang-btn").forEach(btn=>btn.classList.toggle("active",btn.dataset.lang===currentLang));}
async function updateStatus(){
  try{
    const[tab]=await chrome.tabs.query({active:true,currentWindow:true});
    if(!tab.url||tab.url.startsWith("chrome://")){
      document.getElementById("statusDot").classList.remove("active");
      document.getElementById("statusTitle").textContent="Nicht verfügbar";
      document.getElementById("statusSubtitle").textContent="Systemseiten nicht unterstützt";
    }
  }catch(_){}
}
function sendToActiveTab(msg){chrome.tabs.query({active:true,currentWindow:true},([tab])=>{if(tab&&tab.id)chrome.tabs.sendMessage(tab.id,msg).catch(()=>{});});}
