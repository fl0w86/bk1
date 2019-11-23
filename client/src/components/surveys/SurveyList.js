import React from 'react'
import { connect } from 'react-redux'
import { fetchItems } from '../../actions'


class SurveyList extends React.Component {

    componentDidMount() {
        this.props.fetchItems();
    }

    renderList() {
        return this.props.items.reverse().map(item => {
            return (
                <div>
                    <ul>
                        <li>{item.name}</li>
                        <li>{item.description}</li>
                        <li>{item.price}</li>
                        {/* <li>{item.tag}</li> */}
                        <li>{item._user}</li>
                    </ul>
                </div>
            )
        })
    }

    render() {
        return (
            <div>
                {this.renderList()}
            </div>
        )
    }
}

function mapStateToProps({ items }) {
    return { items };
}

export default connect(mapStateToProps, { fetchItems })(SurveyList)
