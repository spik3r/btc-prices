class Coffee extends React.Component {
    render() {

        return (
            <div>
                <p >
                    Favourite Coffee type: {this.props.fav}
                </p>
            </div>
        );
    }
}

export default Coffee;