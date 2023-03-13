import { Component } from 'react';

import './search-panel.css';

class SearchPanel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            term : ''
        }
    }

    onSearch = (e) => {
        const term = e.target.value
        this.setState({term})
        this.props.getString(term)
    }

    render () {
        return (
            <input type="text"
                className="form-control search-input"
                placeholder="Найти сотрудника"
                onChange={this.onSearch}
                value={this.state.term}/>
        )
    }
}

export default SearchPanel;