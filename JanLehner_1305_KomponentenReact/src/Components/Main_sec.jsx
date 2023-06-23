export function Main_sec() {
  return (
    <>
      <main id="main">
          <div class="input-div">
            <input id='form-search' type="text" placeholder="Enter a city" />
            <a id='btn-search'>Search</a>
          </div>
          <div id="locationDiv"></div>
          <div class="clockDiv">
            <p id="hour">00</p>
            <p class="trennpunkt">:</p>
            <p id="minute">00</p>
            <p class="trennpunkt">:</p>
            <p id="second">00</p>
          </div>
        </main>
    </>
  )
}