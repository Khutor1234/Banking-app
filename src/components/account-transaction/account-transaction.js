import React from 'react';
import './account-transaction.sass';
import user1 from '../../img/user1.png';
import user2 from '../../img/user2.png';
import { Link } from 'react-router-dom';

const AccountTransaction = ({selectedItem}) => {

	return (
		<ul className="transaction-list" >
			<li className="transaction-item">
			<Link to={{ pathname: '/payment', selectedItem: selectedItem}} className="transaction-link">
				<svg width="28" height="30" viewBox="0 0 28 30" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M25.6037 0.189262L1.15872 15.8541C0.204126 16.4633 0.325428 17.9396 1.27475 18.3848L6.88101 20.9976L22.0332 6.16462C22.3233 5.87757 22.7347 6.31694 22.4868 6.65086L9.78171 23.8447V28.5605C9.78171 29.9431 11.2848 30.4879 12.0232 29.4861L15.3722 24.9577L21.9436 28.0157C22.6925 28.3672 23.5469 27.8458 23.684 26.9495L27.4813 1.6421C27.6606 0.45874 26.5161 -0.396557 25.6037 0.189262Z" fill="#FD3A6C"/>
				</svg>
				<span>Send Money</span>
			</Link>
			</li>
				<li className="transaction-item">
				<img src={user1} alt="User"/>
				<span>Leo W.</span>
			</li>
			<li className="transaction-item">
				<img src={user2} alt="User" />
				<span>Monica L.</span>
			</li>
		</ul>
	);
};
  
export default AccountTransaction;
