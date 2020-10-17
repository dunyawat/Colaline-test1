import React,{Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Subject = props => (
    <tr>
        <td>{props.subject.subjectName}</td>
        <td>{props.subject.score}</td>
        <td>{props.subject.credit}</td>
        <td>
            <Link href="#" onClick={() => {props.deleteSubject(props.subject._id)}} >delete</Link>
        </td>
    </tr>
)


class GPACal extends Component{
    constructor(props){
        super(props);

        this.deleteSubject = this.deleteSubject.bind(this);
        this.scoreList = this.scoreList.bind(this);
 

        this.state = {
            subjects: [],
            totalScore:0,
            totalCredit:0,
            GPA:0
        };
    }

    componentDidMount(){
        axios.get('http://localhost:7000/subjects')
            .then(response => {
                this.setState({ subjects: response.data})
            })
            .catch((error) => {
                console.log(error);
            })
    }


    subjectList(){
        return this.state.subjects.map(currentsubject => {
            return <Subject subject={currentsubject} deleteSubject={this.deleteSubject} key={currentsubject._id} />;
        })
    }

    deleteSubject(id){
        axios.delete('http://localhost:7000/subjects/'+id)
            .then(res => console.log(res.data));
        this.setState({
            exercises: this.state.subjects.filter(el => el._id !== id)

        })

        window.location.reload();
    }

    scoreList(){
        this.state.subjects.map(data => {
            this.state.totalScore = this.state.totalScore + (data.score * data.credit)
        })
        console.log(this.state.totalScore);
    }

    creditList(){
        this.state.subjects.map(data => {
            this.state.totalCredit = this.state.totalCredit + data.credit
        })
        console.log(this.state.totalCredit);
    }

    render(){
        return(

            <div>
                 { this.creditList(),this.scoreList()}
                <h3>GPA Calcrater</h3>
                    <table className="table">
                        <thead className="thead-light">
                            <tr>
                                <th>Subject Name</th>
                                <th>Score</th>
                                <th>Credit</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            { this.subjectList() }
                        </tbody>
                    </table> 
                    <Link to="/add" style={{marginTop:"5px",backgroundColor:"blue",padding:"10px",borderRadius:"5px",cursor:'pointer',color:"white"}}>เพิ่มวิชาเรียน</Link>
                    <div style={{marginTop:"15px"}}>GPA = {this.state.totalScore/this.state.totalCredit}</div>
            </div>
        )
    }
}

export default GPACal;