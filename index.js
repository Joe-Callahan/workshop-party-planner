state = {
}

const getPartyInformation = async() => {
  const response = await fetch (`https://fsa-crud-2aa9294fe819.herokuapp.com/api/2501-ftb-et-web-ft/events`);
  const responseObject = await response.json();
  const allDetails = responseObject.data;

  for (let i = 0; i < allDetails.length; i++) {
    state[`party${i + 1}`] = allDetails[i];
  }
  
  renderDetails();
}

//GOOD TO HERE

const renderDetails = () => {
  const partyInfo = document.querySelector(`#partyInfo`);
  for(const party in state) {
    const p = document.createElement(`p`);
    p.id = `${party}`
    p.innerText = party;
    partyInfo.append(p);
  }
//at this point - each party has its own 'p' in html
//each p has an id that exactly matches its key in state

}
getPartyInformation();