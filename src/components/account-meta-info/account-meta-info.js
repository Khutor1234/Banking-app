import React from 'react';
import './account-meta-info.sass';

const AccountMetaInfo= ({type, currency, saving}) => {
  return (
    <div className='account-meta'>
        <div className='account-meta-wrapper'>
            <div className='account-meta-item'>
                <div className='account-meta-header'> 
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.8863 7.40826C19.8863 5.59094 18.4088 4.11336 16.5914 4.11336H7.40777C5.59045 4.11336 4.11288 5.59093 4.11288 7.40826V16.5919C4.11288 18.4092 5.59045 19.8868 7.40777 19.8868H16.5914C18.4088 19.8868 19.8863 18.4092 19.8863 16.5919V7.40826ZM7.40777 3.05009H16.5914C18.9986 3.05009 20.9496 5.00108 20.9496 7.40826V16.5919C20.9496 18.9991 18.9986 20.9501 16.5914 20.9501H7.40777C5.0006 20.9501 3.04961 18.9991 3.04961 16.5919V7.40826C3.04961 5.00109 5.0006 3.05009 7.40777 3.05009Z" fill="#262626" stroke="white" stroke-width="0.1"/>
                        <path d="M7.40343 13.5236L7.40344 13.5236L9.78406 15.8568C9.78409 15.8568 9.78411 15.8568 9.78413 15.8568C9.92747 15.9965 10.1122 16.0667 10.2976 16.0667C10.483 16.0667 10.6677 15.9965 10.811 15.8569C10.8111 15.8569 10.8111 15.8568 10.8112 15.8568L16.7634 10.0236L16.7635 10.0236C17.0523 9.74068 17.0567 9.27573 16.7729 8.98679L16.7727 8.98652C16.4901 8.69659 16.026 8.69309 15.7359 8.97646L7.40343 13.5236ZM7.40343 13.5236C7.11466 13.2407 7.11005 12.7765 7.3933 12.4866C7.6771 12.197 8.14205 12.1934 8.43013 12.4756L10.2276 14.2381L10.2976 14.3068L10.3676 14.2381L15.7358 8.97657L7.40343 13.5236Z" fill="#262626" stroke="white" stroke-width="0.2"/>
                    </svg>
                    <span>Account Type:</span>
                </div>
                <div className='account-meta-info'>{type}</div>
            </div>
            <div className='account-meta-item'>
                <div className='account-meta-header'>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.5744 7.3281L12.5508 7.32806C12.3567 7.32806 12.1992 7.48732 12.1992 7.68379C12.1992 7.88026 12.3567 8.03952 12.5508 8.03952L12.5711 8.03956H12.5728C12.7662 8.03956 12.9234 7.8814 12.9244 7.6855C12.9252 7.48903 12.7686 7.32902 12.5744 7.3281Z" fill="#262626"/>
                        <path d="M14.0018 7.78257C14.7666 8.15459 15.4136 8.73401 15.8729 9.4581C16.3448 10.2021 16.5942 11.0648 16.5942 11.9527C16.5942 12.7087 16.4099 13.4589 16.0611 14.1221C15.9979 14.2423 15.8762 14.3108 15.7504 14.3108C15.6947 14.3108 15.6382 14.2974 15.5856 14.269C15.4142 14.1768 15.3492 13.9613 15.4404 13.7879C15.7352 13.2271 15.8911 12.5926 15.8911 11.9527C15.8911 10.4572 15.0299 9.07206 13.6971 8.42377C13.5221 8.33865 13.4485 8.12613 13.5326 7.94905C13.6167 7.77197 13.8268 7.69741 14.0018 7.78257Z" fill="#262626"/>
                        <path d="M11.2485 10.8967C11.2485 11.2702 11.5955 11.5741 12.022 11.5741C12.8362 11.5741 13.4985 12.1971 13.4985 12.9629C13.4985 13.6148 13.0185 14.1629 12.3735 14.3117V14.4653C12.3735 14.6618 12.2161 14.8211 12.022 14.8211C11.8278 14.8211 11.6704 14.6618 11.6704 14.4653V14.3117C11.0254 14.1629 10.5454 13.6148 10.5454 12.9629C10.5454 12.7665 10.7028 12.6072 10.897 12.6072C11.0911 12.6072 11.2485 12.7665 11.2485 12.9629C11.2485 13.3364 11.5955 13.6403 12.022 13.6403C12.4485 13.6403 12.7954 13.3364 12.7954 12.9629C12.7954 12.5894 12.4485 12.2855 12.022 12.2855C11.2078 12.2855 10.5454 11.6625 10.5454 10.8967C10.5454 10.2448 11.0254 9.69674 11.6704 9.54797V9.36296C11.6704 9.16652 11.8278 9.00723 12.022 9.00723C12.2161 9.00723 12.3735 9.16652 12.3735 9.36296V9.54797C13.0185 9.69674 13.4985 10.2448 13.4985 10.8967C13.4985 11.0932 13.3411 11.2525 13.147 11.2525C12.9528 11.2525 12.7954 11.0932 12.7954 10.8967C12.7954 10.5232 12.4485 10.2193 12.022 10.2193C11.5955 10.2193 11.2485 10.5232 11.2485 10.8967Z" fill="#262626"/>
                        <path d="M8.15625 11.9527C8.15625 13.4481 9.0174 14.8332 10.3502 15.4816C10.5252 15.5667 10.5988 15.7792 10.5147 15.9563C10.4542 16.0837 10.3285 16.158 10.1976 16.158C10.1465 16.158 10.0947 16.1467 10.0455 16.1228C9.28072 15.7507 8.6337 15.1713 8.17446 14.4472C7.70256 13.7032 7.45312 12.8406 7.45312 11.9527C7.45312 11.1967 7.63748 10.4465 7.98627 9.78326C8.07743 9.60981 8.2904 9.54403 8.46175 9.63631C8.63317 9.72858 8.69818 9.94401 8.60698 10.1174C8.31213 10.6782 8.15625 11.3128 8.15625 11.9527Z" fill="#262626"/>
                        <path d="M11.4961 15.8655L11.4757 15.8654C11.2807 15.8651 11.1234 16.023 11.1226 16.2195C11.1216 16.416 11.2784 16.576 11.4725 16.5769L11.4961 16.577C11.6902 16.577 11.8476 16.4177 11.8476 16.2212C11.8476 16.0248 11.6902 15.8655 11.4961 15.8655Z" fill="#262626"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.4636 5.83398C13.5246 5.92416 13.577 6.02138 13.6198 6.12454C16.1427 6.83298 18 9.17728 18 11.9526C18 15.2871 15.3189 18 12.0235 18C10.3029 18 8.75023 17.2603 7.65877 16.079H3.51562C2.62392 16.079 1.89843 15.3449 1.89843 14.4427C1.89843 13.9245 2.13799 13.4621 2.51068 13.162C2.13799 12.862 1.89843 12.3996 1.89843 11.8814C1.89843 11.3632 2.13799 10.9008 2.51068 10.6008C2.13799 10.3007 1.89843 9.83833 1.89843 9.32014C1.89843 8.80195 2.13799 8.33953 2.51068 8.03951C2.13799 7.73949 1.89843 7.27707 1.89843 6.75888C1.89843 5.8566 2.62392 5.12252 3.51562 5.12252H4.43249C4.25348 4.85921 4.14843 4.54065 4.14843 4.19762C4.14843 3.85459 4.25351 3.53603 4.43249 3.27272H1.61718C0.725483 3.27272 0 2.53864 0 1.63636C0 0.734086 0.725483 0 1.61718 0H10.2304C11.1222 0 11.8476 0.734086 11.8476 1.63636C11.8476 1.97939 11.7426 2.29795 11.5636 2.56126H14.3789C15.2706 2.56126 15.9961 3.29535 15.9961 4.19762C15.9961 5.0999 15.2706 5.83398 14.3789 5.83398H13.4636ZM15.2929 4.19762C15.2929 3.68764 14.8829 3.27272 14.3789 3.27272H5.76561C5.26158 3.27272 4.85155 3.68764 4.85155 4.19762C4.85155 4.70759 5.26158 5.12252 5.76561 5.12252H14.3789C14.8829 5.12252 15.2929 4.70759 15.2929 4.19762ZM0.703124 1.63636C0.703124 2.14634 1.11315 2.56126 1.61718 2.56126H10.2304C10.7345 2.56126 11.1445 2.14634 11.1445 1.63636C11.1445 1.12639 10.7345 0.711461 10.2304 0.711461H1.61718C1.11315 0.711461 0.703124 1.12639 0.703124 1.63636ZM12.1289 5.83398H3.51562C3.01162 5.83398 2.60156 6.2489 2.60156 6.75888C2.60156 7.26886 3.01162 7.68378 3.51562 7.68378H7.7942C8.8768 6.58564 10.373 5.90516 12.0235 5.90516C12.1933 5.90516 12.3614 5.91277 12.5277 5.9269C12.4061 5.86728 12.2705 5.83398 12.1289 5.83398ZM7.19348 8.39524H3.51562C3.01158 8.39524 2.60156 8.81016 2.60156 9.32014C2.60156 9.83015 3.01158 10.245 3.51562 10.245H6.28986C6.48582 9.57253 6.79439 8.94851 7.19348 8.39524ZM6.12843 10.9565H3.51562C3.01158 10.9565 2.60156 11.3714 2.60156 11.8814C2.60156 12.3914 3.01158 12.8063 3.51562 12.8063H6.10673C6.06761 12.5273 6.0469 12.2424 6.0469 11.9526C6.0469 11.6133 6.07509 11.2807 6.12843 10.9565ZM2.60156 14.4427C2.60156 14.9527 3.01158 15.3676 3.51562 15.3676H7.09378C6.71585 14.8107 6.42768 14.187 6.25028 13.5178H3.51562C3.01158 13.5178 2.60156 13.9326 2.60156 14.4427ZM6.75002 11.9526C6.75002 14.8948 9.11568 17.2885 12.0235 17.2885C14.9312 17.2885 17.2969 14.8948 17.2969 11.9526C17.2969 9.01033 14.9312 6.61662 12.0235 6.61662C9.11568 6.61662 6.75002 9.01033 6.75002 11.9526Z" fill="#262626"/>
                    </svg>
                    <span>Currency</span>
                </div>
                <div className='account-meta-info'>{currency}</div>
            </div>
        </div>

        <div className='account-meta-wrapper'>
            <div className='account-meta-item'>
                <div className='account-meta-header'> 
                <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.3994 14.9081C15.1786 14.9081 14.9994 14.7497 14.9994 14.528V14.488C14.9994 14.2672 15.1786 14.088 15.3994 14.088C15.6202 14.088 15.7994 14.2672 15.7994 14.488C15.7994 14.7089 15.6202 14.9081 15.3994 14.9081Z" fill="#262626"/>
                    <path d="M15.3996 17.8001H12.1996C11.9788 17.8001 11.7996 17.6209 11.7996 17.4001V16.1145C10.8164 16.2273 9.61316 16.2329 8.59956 16.1041V17.4001C8.59956 17.6209 8.42036 17.8001 8.19956 17.8001H4.99956C4.77876 17.8001 4.59956 17.6209 4.59956 17.4001V14.6641C3.24836 13.7497 2.59076 12.6809 2.34516 12.2001H0.999556C0.778756 12.2001 0.599556 12.0209 0.599556 11.8001V8.60012C0.599556 8.37932 0.778756 8.20012 0.999556 8.20012H2.32756C2.50276 7.80972 2.91156 7.07292 3.74116 6.33692L3.01636 3.91532C2.98036 3.79372 3.00276 3.66252 3.07876 3.56172C3.15396 3.46012 3.27316 3.40012 3.39956 3.40012C4.47796 3.40012 6.34676 3.97372 6.90356 5.01132C7.00836 5.20572 6.93556 5.44812 6.74036 5.55292C6.54436 5.65852 6.30356 5.58492 6.19876 5.38972C5.91556 4.86172 4.85876 4.39612 3.95156 4.24892L4.58276 6.35772C4.62916 6.51212 4.57796 6.68012 4.45236 6.78252C3.30276 7.72252 2.98516 8.70812 2.98196 8.71852C2.92996 8.88412 2.77476 9.00012 2.59956 9.00012H1.39956V11.4001H2.59956C2.76356 11.4001 2.91156 11.5017 2.97236 11.6545C2.97716 11.6681 3.53556 13.0425 5.21476 14.1105C5.32996 14.1841 5.39956 14.3113 5.39956 14.4481V17.0001H7.79956V15.6401C7.79956 15.5225 7.85156 15.4097 7.94196 15.3337C8.03236 15.2577 8.15236 15.2257 8.26756 15.2457C9.45876 15.4521 10.9964 15.4433 12.1356 15.2609C12.2516 15.2417 12.3692 15.2761 12.458 15.3513C12.5484 15.4273 12.5996 15.5385 12.5996 15.6561V17.0001H14.9996V14.5281C14.9996 14.3921 15.0684 14.2657 15.1828 14.1921C17.1836 12.9017 17.3996 10.9705 17.3996 10.2001C17.3996 9.45772 16.918 7.25052 14.7212 5.96572C14.5308 5.85372 14.4668 5.60892 14.578 5.41852C14.69 5.22732 14.9332 5.16332 15.1252 5.27532C17.6476 6.75052 18.1996 9.33052 18.1996 10.2001C18.1996 11.0777 17.9612 13.2401 15.7996 14.7417V17.4001C15.7996 17.6209 15.6204 17.8001 15.3996 17.8001Z" fill="#262626"/>
                    <path d="M13.8801 7.27192C13.8193 7.27192 13.7577 7.25832 13.6993 7.22872C12.8753 6.81192 11.8329 6.59992 10.5993 6.59992C9.30092 6.59992 8.15692 6.76552 7.19932 7.09192C6.98972 7.16392 6.76252 7.05112 6.69132 6.84232C6.62012 6.63272 6.73132 6.40552 6.94092 6.33432C7.98172 5.97993 9.21292 5.79993 10.5993 5.79993C11.9593 5.79993 13.1241 6.04073 14.0617 6.51512C14.2585 6.61512 14.3377 6.85592 14.2377 7.05272C14.1665 7.19192 14.0265 7.27192 13.8801 7.27192Z" fill="#262626"/>
                    <path d="M12.4797 6.78404C12.3557 6.78404 12.2325 6.72644 12.1549 6.61764C12.0261 6.43844 12.0669 6.18884 12.2461 6.05924C12.9685 5.53924 13.3997 4.69444 13.3997 3.80004C13.3997 2.25604 12.1437 1.00004 10.5997 1.00004C9.05567 1.00004 7.79967 2.25604 7.79967 3.80004C7.79967 4.68644 8.19967 5.49444 8.89567 6.01604C9.07247 6.14884 9.10847 6.39924 8.97647 6.57604C8.84367 6.75284 8.59327 6.78884 8.41647 6.65684C7.51647 5.98244 6.99967 4.94084 6.99967 3.80004C6.99967 1.81524 8.61487 0.200043 10.5997 0.200043C12.5845 0.200043 14.1997 1.81524 14.1997 3.80004C14.1997 4.95044 13.6437 6.03844 12.7133 6.70884C12.6421 6.75924 12.5605 6.78404 12.4797 6.78404Z" fill="#262626"/>
                    <path d="M4.59962 9.79999C5.04145 9.79999 5.39963 9.44181 5.39963 8.99998C5.39963 8.55815 5.04145 8.19998 4.59962 8.19998C4.15779 8.19998 3.79962 8.55815 3.79962 8.99998C3.79962 9.44181 4.15779 9.79999 4.59962 9.79999Z" fill="#262626"/>
                    <path d="M17.7992 10.5999C17.5784 10.5999 17.3992 10.4207 17.3992 10.1999C17.3992 9.97914 17.5784 9.79994 17.7992 9.79994C18.0264 9.79994 18.3208 9.69594 18.6144 9.53354C18.3192 9.07034 18.1992 8.53194 18.1992 8.19994C18.1992 7.13834 18.6032 6.59995 19.3992 6.59995C20.5992 6.59995 20.5992 7.72074 20.5992 8.19994C20.5992 8.68314 20.3024 9.17034 19.8832 9.57754C20.1496 9.64794 20.4672 9.59994 20.8344 9.43514C21.036 9.34154 21.2728 9.43434 21.3632 9.63514C21.4544 9.83594 21.3648 10.0735 21.1632 10.1639C20.2256 10.5863 19.58 10.3847 19.2024 10.1407C19.1936 10.1351 19.1856 10.1295 19.1768 10.1239C18.6992 10.4167 18.1896 10.5999 17.7992 10.5999ZM19.3992 7.39994C19.212 7.39994 18.9992 7.39994 18.9992 8.19994C18.9992 8.39754 19.0808 8.75994 19.2656 9.06714C19.576 8.78394 19.7992 8.46554 19.7992 8.19994C19.7992 7.43114 19.6832 7.39994 19.3992 7.39994Z" fill="#262626"/>
                </svg>
                    <span>Passive Saving</span>
                </div>
                <div className='account-meta-info'>{saving}</div>
            </div>
            <div className='account-meta-item'>
                <div className='account-meta-header'>
                    <span style={{ paddingLeft: '35px' }}>Share Account</span>
                </div>
                <div className='account-meta-info'>{saving}</div>
            </div>
        </div>
    </div>
  );
};
  
export default AccountMetaInfo;