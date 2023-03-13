import { Component } from 'react';
import './employees-add-form.css';

class EmployeesAddForm extends Component {
    constructor (props) {
        super (props)
        this.state = {
            name : '',
            salary : ''
        }
    }

    onInputChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
        if(this.state.name!== '' && this.state.salary !== '') {
            this.props.addItem(this.state.name, this.state.salary)
        } else {
            console.log('error')
        }
        this.setState({
            name : '',
            salary : ''
        })
    }

    render () {
        const {name,salary} = this.state
        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form onSubmit={this.onSubmit}
                    className="add-form d-flex">
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Как его зовут?"
                        onChange={this.onInputChange} name='name' 
                        value={name}/>
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="З/П в $?" 
                        onChange={this.onInputChange} name='salary'
                        value={salary}/>
    
                    <button type="submit"
                            className="btn btn-outline-light">Добавить</button>
                </form>
            </div>
        )
    }
}

export default EmployeesAddForm;