state = {
  partyList: []
}

const getPartyInformation = async() => {
  const response = await fetch (`https://fsa-crud-2aa9294fe819.herokuapp.com/api/2501-ftb-et-web-ft/events`);
  const responseObject = await response.json();
  const allDetails = responseObject.data;
  state.partyList = allDetails;
  renderDetails();
}

const renderDetails = () => {
  const partyInfo = document.querySelector(`#partyInfo`);
 
  for (i = 0; i < state.partyList.length; i++) {
    const h3 = document.createElement(`h3`);
    h3.innerText = `Party #${i+1}`;
    partyInfo.append(h3);
    const ul = document.createElement(`ul`);
    h3.append(ul);
    const liName = document.createElement(`li`);
    liName.innerText = `Name: ${state.partyList[i].name}`;
    ul.append(liName);
    h3.append(ul);
    const liDateTime = document.createElement(`li`);
    liDateTime.innerText = `Date & Time: ${state.partyList[i].date}`;
    ul.append(liDateTime);
    const liLocation = document.createElement(`li`);
    liLocation.innerText = `Location: ${state.partyList[i].location}`;
    ul.append(liLocation);
    const liDescription = document.createElement(`li`);
    liDescription.innerText = `Description: ${state.partyList[i].description}`;
    ul.append(liDescription);
  }
}
getPartyInformation();