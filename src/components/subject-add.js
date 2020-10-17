import React,{Component} from 'react';
import axios from 'axios';

class subjectAdd extends Component{

    constructor(props){
        super(props);

        this.onChangeSubjectName =this.onChangeSubjectName.bind(this);
        this.onChangeScore =this.onChangeScore.bind(this);
        this.onChangeCredit =this.onChangeCredit.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
 

        this.state = {
            gpa:0,
            score:0,
            credit:0
        };
    }

    onChangeSubjectName(e){
        this.setState({
            subjectName: e.target.value
        });
    }

    onChangeScore(e){
        this.setState({
            score: e.target.value
        });
    }

    onChangeCredit(e){
        this.setState({
            credit: e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault();

        const subject = {
            subjectName: this.state.subjectName,
            score: this.state.score,
            credit: this.state.credit,
        }

        console.log(subject);
        axios.post('http://localhost:7000/subjects/add', subject)
            .then(res => console.log(res.data));

            this.setState({
                subjects: this.state.subjects
            })

        window.location = "/";
    }
    

    render(){
        return(
            <div>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Subject Name:</label>
                        <input type="text" 
                            required
                            className="form-control"
                            value={this.state.subjectName}
                            onChange={this.onChangeSubjectName}
                            />
                    </div>
                    <div className="form-group">
                        <label>Score:</label>
                        <input type="text" 
                            required
                            className="form-control"
                            value={this.state.score}
                            onChange={this.onChangeScore}
                            />
                    </div>
                    <div className="form-group">
                        <label>Credit:</label>
                        <input type="text" 
                            required
                            className="form-control"
                            value={this.state.credit}
                            onChange={this.onChangeCredit}
                            />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create Subject" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}

export default subjectAdd;

 