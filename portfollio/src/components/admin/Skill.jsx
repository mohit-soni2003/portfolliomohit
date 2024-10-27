import React from 'react'
import DashboardSidebar from './DashboardSidebar'
import Button from 'react-bootstrap/Button';

export default function Skill() {
  return (
<div className="admin-dashboard">
        <div className="dasboard-left"><DashboardSidebar></DashboardSidebar></div>
        <div className="dasboard-right">
        <div className="das-right-top">
          <div>Skills</div>
          <Button variant="light">Add New Skill</Button>
        </div>
        <table>
  <tr>
    <th>S.No</th>
    <th>Skill Name</th>
    <th>Percentage</th>
    <th>Update</th>
    <th></th>
    <th></th>
  </tr>
  <tr>
    <td>01.</td>
    <td>JavaScript</td>
    <td>80%</td>
    <td><input type="number" name="" id="" placeholder='80' /></td>
    <td><Button variant="secondary">Update</Button></td>
    <td><Button variant="danger">Delete</Button> </td>
  </tr>
  <tr>
    <td>01.</td>
    <td>JavaScript</td>
    <td>80%</td>
    <td><input type="number" name="" id="" placeholder='80' /></td>
    <td><Button variant="secondary">Update</Button></td>
    <td><Button variant="danger">Delete</Button> </td>
  </tr>
  <tr>
    <td>01.</td>
    <td>JavaScript</td>
    <td>80%</td>
    <td><input type="number" name="" id="" placeholder='80' /></td>
    <td><Button variant="secondary">Update</Button></td>
    <td><Button variant="danger">Delete</Button> </td>
  </tr>
  <tr>
    <td>01.</td>
    <td>JavaScript</td>
    <td>80%</td>
    <td><input type="number" name="" id="" placeholder='80' /></td>
    <td><Button variant="secondary">Update</Button></td>
    <td><Button variant="danger">Delete</Button> </td>
  </tr>
</table>

        
      </div>    </div>  )
}
