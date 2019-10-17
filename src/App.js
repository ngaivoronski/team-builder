import React, {useState} from 'react';
import './App.css';
import Form from './components/Form';
import TeamMembers from './components/TeamMembers';


function App() {
  const [teamList, setTeamList] = useState([]);
  const [memberToEdit, setMemberToEdit] = useState("");

  const addTeamMember = person => {
    setTeamList([...teamList, person]);
  }

  const editTeamMember = newData => {
    var newList = [];
    for (var [index, person] of teamList.entries()) {
      if (person == memberToEdit) {
        newList.push(newData);
      } else {
        newList.push(person);
      }
    }
    setTeamList(newList);
  }

  return (

    <div className="App">
        <h1>Team Members</h1>
        <Form addTeamMember={addTeamMember} memberToEdit={memberToEdit} setMemberToEdit={setMemberToEdit} editTeamMember={editTeamMember}/>
        <TeamMembers teamList={teamList} setMemberToEdit={setMemberToEdit}/>
    </div>
  );
}

export default App;
