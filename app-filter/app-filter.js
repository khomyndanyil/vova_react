import "./app-filter.css";

const AppFilterJs = (props) => {
    const btns = [
        {name : 'all', label : 'Все сотрудники'},
        {name : 'increase', label : 'На повышение'},
        {name : 'more 1000', label : 'З/П больше 1000$'}
    ]
    const btn = btns.map(({name,label}) => {
        const active = props.filter === name
        let clazz = active ? 'btn-light' : 'btn-outline-light'

        return (
            <button type="button"
                    className={`btn ${clazz}`}
                    onClick={() => props.onFilter(name)}
                    key={name}>
                    {label}
            </button>
        )
    })
    return (
        <div className="btn-group">
            {btn}
            {/* <button type="button"
                    className="btn btn-light">
                    Все сотрудники
            </button>
            <button type="button"
                    className="btn btn-outline-light">
                    На повышение
            </button>
            <button type="button"
                    className="btn btn-outline-light">
                    З/П больше 1000$
            </button> */}
        </div>
    )
}

export default AppFilterJs;