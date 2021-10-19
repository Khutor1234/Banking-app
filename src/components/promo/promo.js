import React from 'react';
import './promo.sass';
import { Link } from 'react-router-dom';


const Promo = () => {
  return (
    <div className="promo">
        <Link to="/" className="promo-item">
           <div className="promo-item-wrapper"> 
                <svg width="35" height="25" viewBox="0 0 35 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M30.5982 4.10714H33.7196C34.1488 4.10714 34.5 4.47679 34.5 4.92857V6.57143C34.5 7.02321 34.1488 7.39286 33.7196 7.39286H30.5982V10.6786C30.5982 11.1304 30.2471 11.5 29.8179 11.5H28.2572C27.828 11.5 27.4768 11.1304 27.4768 10.6786V7.39286H24.3554C23.9262 7.39286 23.575 7.02321 23.575 6.57143V4.92857C23.575 4.47679 23.9262 4.10714 24.3554 4.10714H27.4768V0.821429C27.4768 0.369643 27.828 0 28.2572 0H29.8179C30.2471 0 30.5982 0.369643 30.5982 0.821429V4.10714Z" fill="black"/>
                    <path d="M0 22.7066C0 23.7756 0.858507 24.6428 1.91667 24.6428H21.0833C22.1415 24.6428 23 23.7756 23 22.7066V15.6071H0V22.7066ZM7.66667 19.9636C7.66667 19.6974 7.88229 19.4796 8.14583 19.4796H13.5764C13.8399 19.4796 14.0556 19.6974 14.0556 19.9636V21.5771C14.0556 21.8434 13.8399 22.0612 13.5764 22.0612H8.14583C7.88229 22.0612 7.66667 21.8434 7.66667 21.5771V19.9636ZM2.55556 19.9636C2.55556 19.6974 2.77118 19.4796 3.03472 19.4796H5.90972C6.17326 19.4796 6.38889 19.6974 6.38889 19.9636V21.5771C6.38889 21.8434 6.17326 22.0612 5.90972 22.0612H3.03472C2.77118 22.0612 2.55556 21.8434 2.55556 21.5771V19.9636ZM23 8.50763V10.4439H0V8.50763C0 7.43868 0.858507 6.57141 1.91667 6.57141H21.0833C22.1415 6.57141 23 7.43868 23 8.50763Z" fill="black"/>
                </svg>
                <div className="promo-item-text">
                    <div>Request a Card</div>
                    <span>Get a debit card for free</span>
                </div>
            </div>
            <svg width="10" height="15" viewBox="0 0 10 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 14.0713L8 7.57129L1 1.07129" stroke="#262626" stroke-width="2"/>
            </svg>
        </Link>
        <Link to="/payment" className="promo-item">
            <div className="promo-item-wrapper">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.7695 17.6285C3.192 18.0317 3.3468 18.4995 3.19302 19.0411C2.97436 19.8096 2.16205 20.1805 1.30989 19.9167C0.584939 19.6918 0.0577018 19.0159 0.00712381 18.2464C-0.125196 16.2405 1.58066 14.5522 3.62268 14.6501C4.92289 14.7126 5.97021 15.3239 6.94805 16.116C7.62907 16.6673 8.29016 17.2539 9.02226 17.7289C10.4277 18.6409 11.9931 19.1225 13.6703 19.1691C15.741 19.2265 17.5439 18.4821 19.1741 17.2468C20.7047 16.0863 21.7623 14.5507 22.6425 12.8753C23.4314 11.3735 24.2013 9.86207 24.9931 8.36239C25.4861 7.42937 26.0589 6.54555 26.9166 5.90356C27.8812 5.18215 28.9489 4.78404 30.1679 5.09607C31.0415 5.31946 31.6137 5.90612 31.9213 6.74127C32.1578 7.38326 31.8416 8.08673 31.2239 8.36853C30.6042 8.65136 29.8783 8.43104 29.5441 7.82799C29.4317 7.62561 29.3163 7.62612 29.1339 7.68094C28.6904 7.81467 28.3395 8.08315 28.0779 8.44949C27.7765 8.87116 27.4842 9.30513 27.2405 9.76216C26.3414 11.4463 25.481 13.1514 24.5722 14.8299C23.9034 16.0642 23.0993 17.2109 22.0852 18.1895C21.6877 18.5728 21.2601 18.9324 20.8105 19.2521C19.3744 20.2723 18.817 21.7146 18.8875 23.4033C18.9452 24.7826 19.1481 26.1547 19.5241 27.4914C19.5793 27.6872 19.6697 27.8726 19.7489 28.0612C19.8219 28.2354 19.9282 28.2979 20.129 28.2236C20.8463 27.9587 21.5722 27.7164 22.2916 27.4551C22.9337 27.2214 23.577 27.5365 23.7389 28.1775C23.8717 28.7022 23.5999 29.213 23.065 29.4302C21.6274 30.0143 20.1504 30.4698 18.6305 30.7839C16.4649 31.2312 14.2798 31.3654 12.0784 31.1543C9.3763 30.8946 6.80603 30.1486 4.35836 28.9799C3.64516 28.6391 2.9478 28.2631 2.25503 27.8824C1.68233 27.5673 1.50556 26.9248 1.81567 26.3945C2.1176 25.878 2.7414 25.7371 3.30848 26.0445C3.9144 26.373 4.52849 26.6855 5.13491 27.0134C5.2846 27.0944 5.39342 27.078 5.47874 26.9386C5.61617 26.7137 5.77505 26.4964 5.87519 26.2556C6.41979 24.9378 6.86222 23.5826 7.12891 22.1823C7.38537 20.8384 7.05278 19.6574 5.95335 18.7633C5.49815 18.3929 5.05777 17.9994 4.57395 17.6705C4.30829 17.4901 3.97417 17.3923 3.65742 17.3113C3.32177 17.2232 3.02085 17.3421 2.7695 17.6285ZM13.935 29.1146C14.4704 29.1146 15.0073 29.1392 15.5412 29.1095C16.8072 29.0388 17.4703 28.3563 17.3625 27.0898C17.2854 26.1803 17.0504 25.2806 16.8424 24.3865C16.73 23.9034 16.3949 23.536 15.9606 23.306C15.6188 23.1246 15.2515 22.9632 14.8765 22.8781C13.6381 22.5984 12.3885 22.6578 11.1537 22.9017C9.88004 23.1533 8.99212 23.9198 8.53283 25.13C8.3295 25.6654 8.2125 26.2418 8.12361 26.81C7.97698 27.744 8.35197 28.2907 9.24756 28.5577C10.7772 29.0147 12.3466 29.1653 13.935 29.1146Z" fill="black"/>
                    <path d="M18.8032 5.81426C18.7148 5.82348 18.6566 5.83476 18.5984 5.83476C17.7733 5.83578 16.9482 5.83578 16.1088 5.83578C16.0552 5.56167 16.0122 5.3019 15.953 5.04572C15.6597 3.77301 14.123 3.19301 13.0527 3.9508C12.9837 3.99947 12.9178 4.05634 12.8611 4.11834C12.1101 4.93915 12.2935 6.40809 13.2611 6.94197C14.1388 7.42615 15.062 7.82631 15.9617 8.27053C16.3811 8.47752 16.8046 8.68042 17.2036 8.92225C18.1151 9.47458 18.6699 10.2836 18.818 11.3478C18.9437 12.2506 18.8937 13.1426 18.487 13.9752C17.9373 15.0998 16.9451 15.6373 15.7936 15.9426C15.5637 16.0036 15.3302 16.0549 15.0952 16.0912C14.9542 16.1128 14.9128 16.1737 14.9164 16.3095C14.9241 16.6062 14.9189 16.9028 14.9189 17.2138C14.404 17.2138 13.915 17.2138 13.3965 17.2138C13.3965 16.9248 13.3868 16.6456 13.4001 16.3669C13.4082 16.1958 13.3444 16.1338 13.1819 16.0964C12.3579 15.9073 11.5634 15.6368 10.839 15.1854C9.60519 14.4168 9.00592 13.201 9.19597 11.69C9.62869 11.69 10.0675 11.69 10.5064 11.69C10.9478 11.69 11.3897 11.69 11.8531 11.69C11.8802 11.8801 11.9006 12.0554 11.9302 12.229C12.1024 13.2481 12.6884 13.8251 13.7122 13.928C14.0714 13.9639 14.4489 13.9496 14.803 13.8814C15.6521 13.718 16.1762 12.9156 16.0868 11.9964C16.0225 11.3329 15.7154 10.8272 15.1161 10.5321C14.2538 10.1073 13.3735 9.71898 12.5167 9.28398C11.965 9.00372 11.3918 8.73012 10.9151 8.34533C9.80546 7.44972 9.41872 6.22979 9.64453 4.8418C9.88209 3.38361 10.7251 2.3845 12.1106 1.86753C12.5162 1.71638 12.9347 1.59751 13.3515 1.47967C13.5125 1.43407 13.5661 1.35722 13.5595 1.19224C13.5467 0.885842 13.5559 0.578425 13.5559 0.25C14.0566 0.25 14.545 0.25 15.0732 0.25C15.0732 0.58816 15.085 0.935029 15.0686 1.28036C15.0599 1.46686 15.1299 1.52527 15.3026 1.56165C16.3413 1.7794 17.2849 2.18058 17.97 3.04033C18.6127 3.84525 18.8518 4.77314 18.8032 5.81426Z" fill="black"/>
                </svg>
                <div className="promo-item-text">
                    <div>Earn £ 25 for free</div>
                    <span>Apply for pension</span>
                </div>
            </div>
            <svg width="10" height="15" viewBox="0 0 10 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 14.0713L8 7.57129L1 1.07129" stroke="#262626" stroke-width="2"/>
            </svg>
        </Link>
    </div>
  );
};

export default Promo;