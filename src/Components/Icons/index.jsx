/** @format */

import React, { Component } from "react";

export default class Icons extends Component {
  render() {
    let icons = {
      dollar: (
        <svg
          className={this.props.className}
          width='11'
          height='18'
          viewBox='0 0 11 18'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M5.13 14.798L6.138 14.816V17.426H5.13V14.798ZM5.22 14.6V3.638L6.03 3.512V14.636L5.22 14.6ZM5.13 0.829999H6.138V3.404L5.13 3.53V0.829999ZM9.144 5.402C9 5.234 8.808 5.072 8.568 4.916C8.328 4.76 8.058 4.622 7.758 4.502C7.458 4.37 7.128 4.268 6.768 4.196C6.42 4.112 6.054 4.07 5.67 4.07C4.686 4.07 3.96 4.256 3.492 4.628C3.024 5 2.79 5.51 2.79 6.158C2.79 6.614 2.91 6.974 3.15 7.238C3.39 7.502 3.756 7.718 4.248 7.886C4.752 8.054 5.388 8.228 6.156 8.408C7.044 8.6 7.812 8.834 8.46 9.11C9.108 9.386 9.606 9.758 9.954 10.226C10.302 10.682 10.476 11.294 10.476 12.062C10.476 12.674 10.356 13.208 10.116 13.664C9.888 14.108 9.564 14.48 9.144 14.78C8.724 15.068 8.232 15.284 7.668 15.428C7.104 15.56 6.492 15.626 5.832 15.626C5.184 15.626 4.548 15.56 3.924 15.428C3.312 15.284 2.73 15.08 2.178 14.816C1.626 14.552 1.11 14.222 0.63 13.826L1.404 12.458C1.596 12.662 1.842 12.866 2.142 13.07C2.454 13.262 2.802 13.442 3.186 13.61C3.582 13.778 4.008 13.916 4.464 14.024C4.92 14.12 5.388 14.168 5.868 14.168C6.78 14.168 7.488 14.006 7.992 13.682C8.496 13.346 8.748 12.86 8.748 12.224C8.748 11.744 8.604 11.36 8.316 11.072C8.04 10.784 7.626 10.544 7.074 10.352C6.522 10.16 5.85 9.968 5.058 9.776C4.194 9.56 3.468 9.326 2.88 9.074C2.292 8.81 1.848 8.468 1.548 8.048C1.26 7.628 1.116 7.082 1.116 6.41C1.116 5.594 1.314 4.904 1.71 4.34C2.106 3.776 2.652 3.35 3.348 3.062C4.044 2.774 4.83 2.63 5.706 2.63C6.282 2.63 6.816 2.69 7.308 2.81C7.812 2.93 8.28 3.098 8.712 3.314C9.144 3.53 9.54 3.788 9.9 4.088L9.144 5.402Z'
            fill='#1D1F22'
          />
        </svg>
      ),
      downArrow: (
        <svg
          className={this.props.className}
          width='8'
          height='4'
          viewBox='0 0 8 4'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M1 0.5L4 3.5L7 0.5'
            stroke='black'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      ),
      upArrow: (
        <svg
          className={this.props.className}
          width='8'
          height='4'
          viewBox='0 0 8 4'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M1 3.5L4 0.5L7 3.5'
            stroke='black'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      ),
      cart: (
        <svg
          onClick={this.props.action}
          className={this.props.className}
          width='20'
          height='19'
          viewBox='0 0 20 19'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M19.5613 3.87359C19.1822 3.41031 18.5924 3.12873 17.9821 3.12873H5.15889L4.75914 1.63901C4.52718 0.773016 3.72769 0.168945 2.80069 0.168945H0.653099C0.295301 0.168945 0 0.450523 0 0.793474C0 1.13562 0.294459 1.418 0.653099 1.418H2.80069C3.11654 1.418 3.39045 1.61936 3.47434 1.92139L6.04306 11.7077C6.27502 12.5737 7.07451 13.1778 8.00152 13.1778H16.4028C17.3289 13.1778 18.1507 12.5737 18.3612 11.7077L19.9405 5.50575C20.0877 4.941 19.9619 4.33693 19.5613 3.87365L19.5613 3.87359ZM18.6566 5.22252L17.0773 11.4245C16.9934 11.7265 16.7195 11.9279 16.4036 11.9279H8.00154C7.68569 11.9279 7.41178 11.7265 7.32789 11.4245L5.49611 4.39756H17.983C18.1936 4.39756 18.4042 4.49824 18.5308 4.65948C18.6567 4.81994 18.7192 5.0213 18.6567 5.22266L18.6566 5.22252Z'
            fill='#43464E'
          />
          <path
            d='M8.44437 13.9814C7.2443 13.9814 6.25488 14.9276 6.25488 16.0751C6.25488 17.2226 7.24439 18.1688 8.44437 18.1688C9.64445 18.1696 10.6339 17.2234 10.6339 16.0757C10.6339 14.928 9.64436 13.9812 8.44437 13.9812V13.9814ZM8.44437 16.9011C7.9599 16.9011 7.58071 16.5385 7.58071 16.0752C7.58071 15.6119 7.9599 15.2493 8.44437 15.2493C8.92885 15.2493 9.30804 15.6119 9.30804 16.0752C9.30722 16.5188 8.90748 16.9011 8.44437 16.9011Z'
            fill='#43464E'
          />
          <path
            d='M15.6875 13.9814C14.4875 13.9814 13.498 14.9277 13.498 16.0752C13.498 17.2226 14.4876 18.1689 15.6875 18.1689C16.8875 18.1689 17.877 17.2226 17.877 16.0752C17.8565 14.9284 16.8875 13.9814 15.6875 13.9814ZM15.6875 16.9011C15.2031 16.9011 14.8239 16.5385 14.8239 16.0752C14.8239 15.612 15.2031 15.2493 15.6875 15.2493C16.172 15.2493 16.5512 15.612 16.5512 16.0752C16.5512 16.5188 16.1506 16.9011 15.6875 16.9011Z'
            fill='#43464E'
          />
        </svg>
      ),
      logo: (
        <svg
          className={this.props.className}
          width='33'
          height='31'
          viewBox='0 0 33 31'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M30.0222 23.6646C30.0494 23.983 29.8009 24.2566 29.4846 24.2566H3.46924C3.15373 24.2566 2.90553 23.9843 2.93156 23.6665L4.7959 0.912269C4.8191 0.629618 5.05287 0.412109 5.33372 0.412109H27.5426C27.8226 0.412109 28.0561 0.628527 28.0801 0.910361L30.0222 23.6646Z'
            fill='#1DCF65'
          />
          <path
            d='M32.0988 29.6014C32.1313 29.9985 31.8211 30.339 31.4268 30.339H1.59438C1.2009 30.339 0.890922 30.0002 0.922082 29.6037L3.06376 2.34718C3.09168 1.9927 3.38426 1.71973 3.73606 1.71973H29.1958C29.5468 1.71973 29.8391 1.99161 29.868 2.34499L32.0988 29.6014Z'
            fill='url(#paint0_linear_150_362)'
          />
          <path
            d='M15.9232 21.6953C12.0402 21.6953 8.88135 17.8631 8.88135 13.1528C8.88135 12.9075 9.07815 12.7085 9.32109 12.7085C9.56403 12.7085 9.76084 12.9073 9.76084 13.1528C9.76084 17.3732 12.5253 20.8067 15.9234 20.8067C19.3214 20.8067 22.0859 17.3732 22.0859 13.1528C22.0859 12.9075 22.2827 12.7085 22.5257 12.7085C22.7686 12.7085 22.9654 12.9073 22.9654 13.1528C22.9653 17.8631 19.8062 21.6953 15.9232 21.6953Z'
            fill='white'
          />
          <path
            d='M20.2581 13.0337C20.1456 13.0337 20.0331 12.9904 19.9471 12.9036C19.7754 12.7301 19.7754 12.4488 19.9471 12.2753L22.226 9.97292C22.3084 9.88966 22.4203 9.84277 22.5369 9.84277C22.6536 9.84277 22.7654 9.88952 22.8479 9.97292L25.1045 12.2529C25.2762 12.4264 25.2762 12.7077 25.1045 12.8812C24.9327 13.0546 24.6543 13.0547 24.4826 12.8812L22.5368 10.9155L20.569 12.9036C20.4831 12.9904 20.3706 13.0337 20.2581 13.0337Z'
            fill='white'
          />
          <defs>
            <linearGradient
              id='paint0_linear_150_362'
              x1='25.8733'
              y1='26.3337'
              x2='7.51325'
              y2='4.9008'
              gradientUnits='userSpaceOnUse'>
              <stop stopColor='#52D67A' />
              <stop offset='1' stopColor='#5AEE87' />
            </linearGradient>
          </defs>
        </svg>
      ),
      greenCart: (
        <svg
          onClick={this.props.action}
          className={this.props.className}
          width='74'
          height='74'
          viewBox='0 0 74 74'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
          <g filter='url(#filter0_d_150_263)'>
            <circle cx='37' cy='33' r='26' fill='#5ECE7B' />
            <path
              d='M48.4736 26.8484C48.0186 26.2925 47.3109 25.9546 46.5785 25.9546H31.1907L30.711 24.1669C30.4326 23.1277 29.4732 22.4028 28.3608 22.4028H25.7837C25.3544 22.4028 25 22.7407 25 23.1523C25 23.5628 25.3534 23.9017 25.7837 23.9017H28.3608C28.7398 23.9017 29.0685 24.1433 29.1692 24.5058L32.2517 36.2494C32.53 37.2886 33.4894 38.0135 34.6018 38.0135H44.6833C45.7947 38.0135 46.7808 37.2886 47.0335 36.2494L48.9286 28.807C49.1053 28.1293 48.9543 27.4044 48.4736 26.8485L48.4736 26.8484ZM47.3879 28.4671L45.4928 35.9095C45.3921 36.272 45.0634 36.5136 44.6844 36.5136H34.6018C34.2228 36.5136 33.8941 36.272 33.7935 35.9095L31.5953 27.4772H46.5796C46.8323 27.4772 47.085 27.598 47.237 27.7915C47.388 27.984 47.463 28.2257 47.388 28.4673L47.3879 28.4671Z'
              fill='white'
            />
            <path
              d='M35.1332 38.9778C33.6932 38.9778 32.5059 40.1132 32.5059 41.4902C32.5059 42.8672 33.6933 44.0027 35.1332 44.0027C36.5733 44.0036 37.7606 42.8682 37.7606 41.491C37.7606 40.1137 36.5732 38.9775 35.1332 38.9775V38.9778ZM35.1332 42.4814C34.5519 42.4814 34.0968 42.0463 34.0968 41.4903C34.0968 40.9344 34.5519 40.4993 35.1332 40.4993C35.7146 40.4993 36.1696 40.9344 36.1696 41.4903C36.1687 42.0227 35.689 42.4814 35.1332 42.4814Z'
              fill='white'
            />
            <path
              d='M43.8251 38.978C42.3851 38.978 41.1978 40.1135 41.1978 41.4905C41.1978 42.8675 42.3852 44.0029 43.8251 44.0029C45.2651 44.0029 46.4525 42.8675 46.4525 41.4905C46.4279 40.1143 45.2651 38.978 43.8251 38.978ZM43.8251 42.4816C43.2438 42.4816 42.7887 42.0465 42.7887 41.4906C42.7887 40.9346 43.2438 40.4995 43.8251 40.4995C44.4065 40.4995 44.8615 40.9346 44.8615 41.4906C44.8615 42.0229 44.3809 42.4816 43.8251 42.4816Z'
              fill='white'
            />
          </g>
          <defs>
            <filter
              id='filter0_d_150_263'
              x='0'
              y='0'
              width='74'
              height='74'
              filterUnits='userSpaceOnUse'
              colorInterpolationFilters='sRGB'>
              <feFlood floodOpacity='0' result='BackgroundImageFix' />
              <feColorMatrix
                in='SourceAlpha'
                type='matrix'
                values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                result='hardAlpha'
              />
              <feOffset dy='4' />
              <feGaussianBlur stdDeviation='5.5' />
              <feColorMatrix
                type='matrix'
                values='0 0 0 0 0.113725 0 0 0 0 0.121569 0 0 0 0 0.133333 0 0 0 0.1 0'
              />
              <feBlend
                mode='normal'
                in2='BackgroundImageFix'
                result='effect1_dropShadow_150_263'
              />
              <feBlend
                mode='normal'
                in='SourceGraphic'
                in2='effect1_dropShadow_150_263'
                result='shape'
              />
            </filter>
          </defs>
        </svg>
      ),
      add: (
        <svg
          onClick={this.props.action}
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M12 8V16'
            stroke='#1D1F22'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M8 12H16'
            stroke='#1D1F22'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <rect x='0.5' y='0.5' width='23' height='23' stroke='#1D1F22' />
        </svg>
      ),
      remove: (
        <svg
          onClick={this.props.action}
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M8 12H16'
            stroke='#1D1F22'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <rect x='0.5' y='0.5' width='23' height='23' stroke='#1D1F22' />
        </svg>
      ),
      leftArrow: (
        <svg
          onClick={this.props.action}
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
          <rect width='24' height='24' fill='black' fillOpacity='0.73' />
          <path
            d='M14.25 6.06857L8.625 11.6876L14.25 17.3066'
            stroke='white'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      ),
      rightArrow: (
        <svg
          onClick={this.props.action}
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
          <rect
            width='24'
            height='24'
            transform='matrix(-1 0 0 1 24 0)'
            fill='black'
            fillOpacity='0.73'
          />
          <path
            d='M9.75 6.06808L15.375 11.6871L9.75 17.3062'
            stroke='white'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      ),
    };
    return <>{icons[this.props.iconName]}</>;
  }
}