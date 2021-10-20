import React, {Component} from 'react';
import './balance-list.sass';
import BalanceListItem from '../balance-list-item';
import { connect } from 'react-redux';
import { fetchAccounts} from '../../actions';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator'

class BalanceList extends Component {

	componentDidMount(){
		this.props.fetchAccounts();
	}

	render(){

		const {accounts, loading, error, selectedItem} = this.props;

		if(loading){
		return <Spinner/>
		}

		if(error){
			return <ErrorIndicator/>
		}

		return (
		<ul className="balance-list">
			{
				accounts.map((item) => {
					return (
						<li key={item.id}>
							<BalanceListItem
							account={item}
							selectedPayment={selectedItem}
							/>
						</li>
					);
				})
			}
		</ul>
		);
	}
};

const mapStateToProps = ({banking: {accounts, loading, error}}) => {
  return{
    accounts, 
    loading, 
    error
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAccounts: fetchAccounts(dispatch),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(BalanceList);
