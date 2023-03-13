import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilterJs from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data : [
        {name: 'arsen.C', salary : 800, increase : true, rise : false, id : 1 },
        {name: 'Alex.M', salary : 3000, increase : false, rise : true, id :2 },
        {name: 'Danyil.W', salary : 100000000, increase : false, rise : false, id : 3 },
        {name: 'Vasyl.W', salary : 15000, increase : false, rise : false, id : 4 },
        {name: 'Ivan.W', salary : 25000, increase : true, rise : false, id : 5}
      ],
      term : '',
      filter : 'all'
    }
    this.maxId = 6
  }

  onDeleteItem = (id) => {
    this.setState(({data}) => ({
      data : data.filter(item => item.id !== id)
    }))
  }

  onAddItem = (name, salary) => {
      const newItem = {
        name,
        salary,
        increase : false,
        rise : false,
        id : this.maxId++
      }
      this.setState(({data}) => {
        const newArr = [...data,newItem]
        return {
          data : newArr
        }
      });
  }

onToogleIncrease = (id) => {
  this.setState(({data}) => ({
    data : data.map( item => {
      if(item.id === id) {
        return {...item, increase : !item.increase}
      }
      return item
    })
  }))
}

onToogleRise = (id) => {
  this.setState(({data}) => ({
    data : data.map(item => {
      if(item.id === id) {
        return {...item, rise : !item.rise}
      }
      return item
    })
  }))
}

seachEmp = (term,items)  => {
  if(term.length === 0) {
    return items
  }
  return items.filter(item => {
    return item.name.indexOf(term) > -1
  })
}

getString = (str) => {
  this.setState({
    term : str
  })
}

filterPost = (items, filter) => {
    switch(filter) {
      case 'increase':
        return items.filter(item => item.increase)
      case  'more 1000' :
        return items.filter(item => item.salary > 1000)
      default :
        return items
    }
}

onFilter = (filter) => {
  this.setState({
    filter : filter
  })
}
  
  render () {
    const employees = this.state.data.length
    const increase = this.state.data.filter(item => item.increase).length
    const visibleData = this.filterPost(this.seachEmp(this.state.term, this.state.data), this.state.filter)
    return (
      <div className="app">
          <AppInfo employees={employees}
          increase={increase}/>
  
          <div className="search-panel">
              <SearchPanel getString={this.getString}/>
              <AppFilterJs filter={this.state.filter} onFilter={this.onFilter}/>
          </div>
          
          <EmployeesList data={visibleData}
          onDelete={this.onDeleteItem}
          onToogleIncrease={this.onToogleIncrease}
          onToogleRise={this.onToogleRise}/>
          <EmployeesAddForm addItem={this.onAddItem}/>
      </div>
    );
  }
}

export default App;
