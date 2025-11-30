function el(sel){return document.querySelector(sel);}
function createPlayerCard(p){
  const div = document.createElement('div'); div.className='player-card';
  const img = document.createElement('img'); img.className='player-thumb';
  img.alt = p.name; img.src = p.image ? 'assets/'+p.image : 'assets/logo.png';
  const info = document.createElement('div');
  info.innerHTML = `<div style="font-weight:700">${p.name} <span style="color:#98a7b6;font-weight:600">#${p.id}</span></div>
  <div style="color:#98a7b6;margin-top:6px">${p.role}</div>
  <div style="display:flex;gap:10px;margin-top:8px">
    <div class="stat"><span class="num">${p.runs}</span>Runs</div>
    <div class="stat"><span class="num">${p.wickets}</span>Wkts</div>
    <div class="stat"><span class="num">${p.strikeRate}</span>SR</div>
  </div>`;
  div.appendChild(img); div.appendChild(info);
  return div;
}

function renderPlayers(list){
  const wrap = el('#players'); wrap.innerHTML='';
  list.forEach(p=>wrap.appendChild(createPlayerCard(p)));
}

function renderSchedule(){
  const container = el('#schedule-table');
  let html = '<table class="table"><thead><tr><th>Date</th><th>Time</th><th>Opponent</th><th>Venue</th><th>Result</th></tr></thead><tbody>';
  DATA.schedule.forEach(s=>{
    html += `<tr><td>${s.date}</td><td>${s.time}</td><td>${s.opponent}</td><td>${s.venue}</td><td>${s.result}</td></tr>`;
  });
  html += '</tbody></table>';
  container.innerHTML = html;
}

function renderStats(){
  const grid = el('#stats-grid'); grid.innerHTML='';
  DATA.players.forEach(p=>{
    const card = document.createElement('div'); card.className='player-card';
    card.innerHTML = `<div style="flex:1">
      <div style="font-weight:700">${p.name} <span style="color:#98a7b6;font-weight:600">#${p.id}</span></div>
      <div style="color:#98a7b6;margin-top:6px">${p.role}</div>
      <div style="display:flex;gap:18px;margin-top:10px">
        <div class="stat"><span class="num">${p.matches}</span>Matches</div>
        <div class="stat"><span class="num">${p.runs}</span>Runs</div>
        <div class="stat"><span class="num">${p.wickets}</span>Wkts</div>
      </div>
    </div>
    <img src="${'assets/logo.png'}" style="width:84px;height:84px;border-radius:8px;object-fit:cover">`;
    grid.appendChild(card);
  });
}

function renderPoints(){
  const c = el('#points-table');
  let html = '<table class="table"><thead><tr><th>Team</th><th>P</th><th>W</th><th>L</th><th>Pts</th><th>NRR</th></tr></thead><tbody>';
  DATA.points.forEach(r=>{
    html += `<tr><td>${r.team}</td><td>${r.played}</td><td>${r.won}</td><td>${r.lost}</td><td>${r.points}</td><td>${r.nrr}</td></tr>`;
  });
  html += '</tbody></table>';
  c.innerHTML = html;
}

document.addEventListener('DOMContentLoaded',()=>{
  renderPlayers(DATA.players);
  renderSchedule();
  renderStats();
  renderPoints();

  el('#search').addEventListener('input', (e)=>{
    const q = e.target.value.toLowerCase();
    const filtered = DATA.players.filter(p => p.name.toLowerCase().includes(q) || p.role.toLowerCase().includes(q));
    renderPlayers(filtered);
  });
});
