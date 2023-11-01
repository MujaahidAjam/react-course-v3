const List = ({people}) => {
    return <section>
        {people.map((person)=>{
            return <Person key={person.key} {...person}/>;
        })}
    </section>
};

export default List;