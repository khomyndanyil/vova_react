import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({data,onDelete,onToogleIncrease,onToogleRise}) => {
    const element = data.map(item => {
        const {id,...itemProps} = item
        return (
            <EmployeesListItem key={id} {...itemProps} 
            onDelete={() => onDelete(id)}
            onToogleIncrease={() => onToogleIncrease(id)}
            onToogleRise={() => onToogleRise(id)}/> 
            // name={item.name} salary={item.salary} --- Але ми робимо це все через spread operator
        )
    }) 
    return (
        <ul className="app-list list-group">
            {element}
        </ul>
    )
}

export default EmployeesList;