const heroes = [
  { name: "Aamon", role: "assassin" },
  { name: "Akai", role: "tank" },
  { name: "Aldous", role: "fighter" },
  { name: "Alice", role: "mage" },
  { name: "Alpha", role: "fighter" },
  { name: "Alucard", role: "fighter" },
  { name: "Angela", role: "support" },
  { name: "Argus", role: "fighter" },
  { name: "Arlott", role: "fighter" },
  { name: "Atlas", role: "tank" },
  { name: "Aulus", role: "fighter" },
  { name: "Aurora", role: "mage" },
  { name: "Badang", role: "fighter" },
  { name: "Balmond", role: "fighter" },
  { name: "Bane", role: "fighter" },
  { name: "Barats", role: "fighter" },
  { name: "Baxia", role: "tank" },
  { name: "Beatrix", role: "marksman" },
  { name: "Belerick", role: "tank" },
  { name: "Benedetta", role: "assassin" },
  { name: "Brody", role: "marksman" },
  { name: "Bruno", role: "marksman" },
  { name: "Carmilla", role: "support" },
  { name: "Cecilion", role: "mage" },
  { name: "Chang'e", role: "mage" },
  { name: "Chou", role: "fighter" },
  { name: "Claude", role: "marksman" },
  { name: "Clint", role: "marksman" },
  { name: "Cyclops", role: "mage" },
  { name: "Diggie", role: "support" },
  { name: "Dyrroth", role: "fighter" },
  { name: "Edith", role: "tank" },
  { name: "Esmeralda", role: "mage" },
  { name: "Estes", role: "support" },
  { name: "Eudora", role: "mage" },
  { name: "Fanny", role: "assassin" },
  { name: "Faramis", role: "support" },
  { name: "Floryn", role: "support" },
  { name: "Franco", role: "tank" },
  { name: "Fredrinn", role: "tank" },
  { name: "Freya", role: "fighter" },
  { name: "Gatotkaca", role: "tank" },
  { name: "Gloo", role: "tank" },
  { name: "Gord", role: "mage" },
  { name: "Granger", role: "marksman" },
  { name: "Grock", role: "tank" },
  { name: "Guinevere", role: "fighter" },
  { name: "Gusion", role: "assassin" },
  { name: "Hanabi", role: "marksman" },
  { name: "Hanzo", role: "assassin" },
  { name: "Harith", role: "mage" },
  { name: "Harley", role: "mage" },
  { name: "Hayabusa", role: "assassin" },
  { name: "Helcurt", role: "assassin" },
  { name: "Hilda", role: "fighter" },
  { name: "Hylos", role: "tank" },
  { name: "Irithel", role: "marksman" },
  { name: "Jawhead", role: "fighter" },
  { name: "Johnson", role: "tank" },
  { name: "Joy", role: "fighter" },
  { name: "Julian", role: "fighter" },
  { name: "Kadita", role: "mage" },
  { name: "Kagura", role: "mage" },
  { name: "Kaja", role: "fighter" },
  { name: "Karina", role: "assassin" },
  { name: "Karrie", role: "marksman" },
  { name: "Khaleed", role: "fighter" },
  { name: "Khufra", role: "tank" },
  { name: "Kimmy", role: "marksman" },
  { name: "Lancelot", role: "assassin" },
  { name: "Lapu-Lapu", role: "fighter" },
  { name: "Layla", role: "marksman" },
  { name: "Leomord", role: "fighter" },
  { name: "Lesley", role: "marksman" },
  { name: "Ling", role: "assassin" },
  { name: "Lolita", role: "support" },
  { name: "Lunox", role: "mage" },
  { name: "Luo Yi", role: "mage" },
  { name: "Lylia", role: "mage" },
  { name: "Martis", role: "fighter" },
  { name: "Masha", role: "fighter" },
  { name: "Mathilda", role: "support" },
  { name: "Melissa", role: "marksman" },
  { name: "Minotaur", role: "tank" },
  { name: "Minsitthar", role: "fighter" },
  { name: "Miya", role: "marksman" },
  { name: "Moskov", role: "marksman" },
  { name: "Nana", role: "mage" },
  { name: "Natalia", role: "assassin" },
  { name: "Natan", role: "marksman" },
  { name: "Odette", role: "mage" },
  { name: "Paquito", role: "fighter" },
  { name: "Pharsa", role: "mage" },
  { name: "Phoveus", role: "fighter" },
  { name: "Popol and Kupa", role: "marksman" },
  { name: "Rafaela", role: "support" },
  { name: "Roger", role: "fighter" },
  { name: "Ruby", role: "fighter" },
  { name: "Saber", role: "assassin" },
  { name: "Selena", role: "assassin" },
  { name: "Silvanna", role: "fighter" },
  { name: "Sun", role: "fighter" },
  { name: "Terizla", role: "fighter" },
  { name: "Thamuz", role: "fighter" },
  { name: "Tigreal", role: "tank" },
  { name: "Uranus", role: "tank" },
  { name: "Vale", role: "mage" },
  { name: "Valentina", role: "mage" },
  { name: "Valir", role: "mage" },
  { name: "Vexana", role: "mage" },
  { name: "Wanwan", role: "marksman" },
  { name: "X.Borg", role: "fighter" },
  { name: "Xavier", role: "mage" },
  { name: "Yi Sun-Shin", role: "assassin" },
  { name: "Yin", role: "fighter" },
  { name: "Yu Zhong", role: "fighter" },
  { name: "Yve", role: "mage" },
  { name: "Zhask", role: "mage" },
  { name: "Zilong", role: "fighter" },
]

const turns = [
  "ready", "blue", "red", "blue", "red", "blue", "red", "blue", "red", "red", "blue",
  "blue", "red", "red", "blue", "red", "blue", "red", "blue", "blue", "red", "end"
]

const localState = {
  draftId: "",
  authId: "",
  blueAuthId: "",
  redAuthId: "",
  identity: "",
  nameFilter: "",
  roleFilter: "",
  filteredHeroes: [],
  timer: 50000,
  timerInterval: null,
}

const readyState = {
  blueReady: false,
  redReady: false
}

let draftState = {
  blueTeam: "",
  redTeam: "",
  currentTurn: "", // ready check for first turn
  /*  Which turn is it?
       0 - ready check
       1 - blue ban 1
       2 - red ban 1
       3 - blue ban 2
       4 - red ban 2
       5 - blue ban 3
       6 - red ban 3
       7 - blue pick 1
       8 - red pick 1
       9 - red pick 2
      10 - blue pick 2
      11 - blue pick 3
      12 - red pick 3
      13 - red ban 4
      14 - blue ban 4
      15 - blue ban 5
      16 - red ban 5
      17 - red pick 4
      18 - blue pick 4
      19 - blue pick 5
      20 - red pick 5
      21 - end state
  */
  currentIndex: 0,
  // this array stores the name of the selection of each box from 0-21
  selectionState: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
  selectedHeroes: {},
}

const timerSubtext = [
  "Ready", "Blue Ban", "Red Ban", "Blue Ban", "Red Ban", "Blue Ban", "Red Ban", "Blue Pick", "Red Pick", "Red Pick", "Blue Pick",
  "Blue Pick", "Red Pick", "Red Ban", "Blue Ban", "Red Ban", "Blue Ban", "Red Pick", "Blue Pick", "Blue Pick", "Red Pick", "End",
]

function setIdentity() {
  if (localState.authId == localState.blueAuthId) {
    localState.identity = "blue"
    return
  }
  if (localState.authId == localState.redAuthId) {
    localState.identity = "red"
    return
  }
  localState.identity = "spectator"
}

function renderHeader() {
  if (draftState.currentIndex == 0 || draftState.currentIndex == 21) {
    document.getElementById("timer").style.setProperty("visibility", "hidden")
    document.getElementById("timer_subtext").style.setProperty("visibility", "hidden")
  } else {
    document.getElementById("timer").style.removeProperty("visibility")
    document.getElementById("timer_subtext").style.removeProperty("visibility")
  }

  const blueHeader = document.getElementById("blue_header")
  const redHeader = document.getElementById("red_header")
  blueHeader.className = `blue_bg ${draftState.currentTurn == "blue" || draftState.currentTurn == "end" ? "" : "not_your_turn"}`
  redHeader.className = `red_bg ${draftState.currentTurn == "red" || draftState.currentTurn == "end" ? "" : "not_your_turn"}`

  const blueTeam = document.getElementById("team1")
  const redTeam = document.getElementById("team2")
  blueTeam.innerHTML = draftState.blueTeam
  redTeam.innerHTML = draftState.redTeam

  const timerEl = document.getElementById("timer")
  timerEl.innerHTML = localState.timer < 0 ? 0 : Math.round(localState.timer / 1000)

  const subtext = document.getElementById("timer_subtext")
  subtext.innerHTML = timerSubtext[draftState.currentIndex]
}

function renderPicks() {
  draftState.selectionState.map((hero, idx) => {
    const hl = document.getElementById(`hl_${idx}`)
    const heroImg = document.getElementById(`infobox_${idx}`)
    const heroText = document.getElementById(`infotext_${idx}`)
    if (hl) {
      if (draftState.currentIndex == idx) {
        hl.classList.remove("d-none")
      } else {
        hl.classList.add("d-none")
      }
    }
    if (hero) {
      if (hero == "b") {
        const pickBan = document.getElementById(`pickban_${idx}`)
        if (pickBan) {
          pickBan.classList.add("b")
        }
      } else {
        heroImg.style.backgroundImage = `url("static/hero_assets/infobox/600px-${hero}_infobox.jpg")`
        heroText.innerHTML = hero
      }
    }
  })
}

function renderFilter() {
  if (draftState.currentIndex == 0 || draftState.currentIndex == 21 || localState.identity == "spectator") {
    document.querySelector(".filter").classList.add("d-none")
    document.querySelector(".search").classList.add("d-none")
  } else {
    document.querySelector(".filter").classList.remove("d-none")
    document.querySelector(".search").classList.remove("d-none")
  }

  document.querySelectorAll(".filter_icon").forEach(role => {
    if (role.id == localState.roleFilter) {
      document.getElementById(`${role.id}`).classList.add("filtered")
    } else {
      document.getElementById(`${role.id}`).classList.remove("filtered")
    }
  })

  if ((localState.identity == draftState.currentTurn) && (getCurrentSelectedHero())) {
    document.getElementById("select").style.removeProperty("visibility")
  } else {
    document.getElementById("select").style.setProperty("visibility", "hidden")
  }
}

function renderHeroes() {
  const { nameFilter, roleFilter } = localState
  localState.filteredHeroes = heroes
    .filter(hero => hero.name.toLowerCase().startsWith(nameFilter.toLowerCase()))
    .filter(hero => roleFilter == "" || hero.role == roleFilter)
  let heroesHTML = ""
  localState.filteredHeroes.forEach(hero => {
    heroesHTML += `
        <div class="hero">
            <img id="hero_${hero.name}" 
                class="hero_icon" 
                src="/static/hero_assets/icons/ML_icon_${hero.name}.png" />
            <p class="hero_name">${hero.name}</p>
        </div>`
  })
  document.getElementById("heroes_list").innerHTML = heroesHTML
  localState.filteredHeroes.forEach(hero => {
    const disabled = draftState.selectedHeroes[hero.name] || getCurrentSelectedHero() === hero.name
    const heroEl = document.getElementById(`hero_${hero.name}`)
    if (!disabled) {
      heroEl.addEventListener("click", () => onSelectHero(hero.name))
    }
  })
  setHeroesState()
}

function setHeroesState() {
  if (draftState.currentIndex == 0 || draftState.currentIndex == 21 || localState.identity == "spectator") {
    document.querySelector(".heroes_list").style.setProperty("visibility", "hidden")
  } else {
    document.querySelector(".heroes_list").style.removeProperty("visibility")
  }

  localState.filteredHeroes.forEach(hero => {
    const disabled = draftState.selectedHeroes[hero.name] || getCurrentSelectedHero() === hero.name
    const heroEl = document.getElementById(`hero_${hero.name}`)
    heroEl.setAttribute('disabled', disabled)
  })
}

function getCurrentSelectedHero() {
  return draftState.selectionState[[draftState.currentIndex]]
}

function timerTick() {
  if (draftState.currentIndex != 0 && draftState.currentIndex != 21) {
    localState.timer -= 1000
  }
  if (localState.timer <= -2000) {
    if (getCurrentSelectedHero()) {
      onSubmit()
    } else {
      // dummy pick to signify a missed pick/ban
      draftState.selectionState[[draftState.currentIndex]] = "b"
      nextTurn()
    }
  }
  renderHeader()
}

function resetTimer() {
  // reset timer
  if (localState.timerInterval) {
    clearInterval(localState.timerInterval)
  }
  localState.timerInterval = setInterval(timerTick, 1000)
}

async function nextTurn() {
  resetTimer()
  localState.timer = 50000
  draftState.currentIndex++
  draftState.currentTurn = turns[draftState.currentIndex]
  updateDraftState(true)
  renderHeader()
  renderPicks()
  renderFilter()
  renderHeroes()
}

function onSelectHero(hero) {
  if (localState.identity != draftState.currentTurn) {
    // skip selection if not my turn
    return;
  }
  draftState.selectionState[[draftState.currentIndex]] = hero
  updateDraftState(false)
  renderHeroes()
  renderPicks()
}

function onSubmit() {
  const selectedHero = getCurrentSelectedHero()
  if (!selectedHero || localState.identity != draftState.currentTurn) return
  draftState.selectedHeroes[selectedHero] = true
  renderHeroes()
  nextTurn()
}

function onSearch(inputField) {
  localState.nameFilter = inputField.value
  renderHeroes()
}

function onFilter(role) {
  if (localState.roleFilter == role.id) {
    localState.roleFilter = ""
  } else {
    localState.roleFilter = role.id
  }
  renderHeroes()
  renderFilter()
}

async function onReady() {
  if (localState.identity == "blue") {
    readyState.blueReady = true
  }
  else if (localState.identity == "red") {
    readyState.redReady = true
  }
  await updateReadyState()
  renderHeroes()
  renderReady()
}

function renderReady() {
  if ((localState.identity == "blue" && !readyState.blueReady) || (localState.identity == "red" && !readyState.redReady)) {
    document.getElementById("ready").classList.remove("d-none")
    return
  }
  if ((readyState.blueReady == true && readyState.redReady == true) || (localState.identity == "spectator")) {
    document.getElementById("ready").classList.add("d-none")
  }
  document.getElementById("ready").innerHTML = "Waiting for the other team..."
}

async function updateReadyState() {
  const dataToSend = { draftId: localState.draftId, identity: localState.identity }
  const data = await fetch('/readystate',
    {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(dataToSend)
    })
  const response = await data.json()
  if (response.blueReady && response.redReady) {
    readyState.blueReady = response.blueReady
    readyState.redReady = response.redReady
    await nextTurn()
  }
}

function updateDraftState(newTurn) {
  // exclude timer from payload using object destructuring
  const { timer, ...rest } = draftState
  const dataToSend = { draftId: localState.draftId, draftState: rest, newTurn: newTurn }
  fetch('/draftstate',
    {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(dataToSend)
    })
    .then(() => {
      console.log('update success')
    })
    .catch(err => {
      console.error("error fetching draftState: " + err)
    })
}

async function getAndUpdateState(initialHydration) {
  if (draftState.currentIndex == 21) {
    return
  }
  const response = await (await fetch(`/draftstate?draft=${localState.draftId}${localState.authId ? '&auth_id=' + localState.authId : ''}`)).json()
  draftState = response.draftState
  readyState.blueReady = response.blueReady
  readyState.redReady = response.redReady
  localState.blueAuthId = response.blueAuthId
  localState.redAuthId = response.redAuthId
  if (Math.abs(localState.timer - draftState.timer) > 1000) {
    // only reset timer if difference is > 1s
    localState.timer = draftState.timer
    resetTimer()
  }
  setIdentity()
  // re-render
  renderReady()
  renderHeader()
  renderPicks()
  renderFilter()
  if (initialHydration) {
    renderHeroes()
    return
  }
  setHeroesState()
}

// Run script once DOM
document.addEventListener("DOMContentLoaded", () => {

  // When copy button is clicked, copy link to clipboard
  if (window.location.pathname == '/links') {
    document.querySelectorAll(".copy").forEach(button => {
      button.addEventListener("click", function () {
        const getLink = document.getElementById(button.dataset.linkid)
        getLink.select()
        navigator.clipboard.writeText(getLink.value)
      })
    })
  }

  if (window.location.pathname == '/draft') {
    // Setup ready button
    document.getElementById("ready").addEventListener("click", function () { onReady(this) })

    // Setup timer countdown
    localState.timerInterval = setInterval(timerTick, 1000)

    // Setup search function
    document.getElementById("search_input").addEventListener("keyup", function () { onSearch(this) })
    document.getElementById("search_input").addEventListener("search", function () { onSearch(this) })

    // Setup select function
    document.getElementById("select").addEventListener("click", function () { onSubmit() })

    // Setup role filter function
    document.querySelectorAll(".filter_icon").forEach(roleImage => {
      roleImage.addEventListener("click", function () { onFilter(this) })
    })

    // Get query params from URL, i.e., getting draftID and authID from https://...../draft?draft={draftId}&auth={authId}
    const params = new Proxy(new URLSearchParams(window.location.search), { get: (searchParams, prop) => searchParams.get(prop) });
    // Get the value of "some_key" in eg "https://example.com/?some_key=some_value"
    localState.draftId = params.draft;
    localState.authId = params.auth;

    setInterval(getAndUpdateState, 500);

    // initial hydration
    getAndUpdateState(true)
  }
})