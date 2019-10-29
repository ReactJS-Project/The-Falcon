import React, { Component } from 'react';
import {Redirect,Link} from 'react-router-dom';

export default class Options extends Component {

   componentDidMount(){
        function buyerAppendance() {
            buyerTitle.appendChild(newUnOrder)
            buyerTitle.appendChild(buyerGetStarted)
            newUnOrder.appendChild(newLi)
            newLi.innerText = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        }
        
        let buyerTitle = document.querySelector('.buyer-title')
        buyerTitle.onmouseover = buyerAppendance;
        let newUnOrder = document.createElement('ul')
        let newLi = document.createElement('li')
        newLi.setAttribute('style', 'font-size:18px;list-style:none;margin-top:11px;')

        let buyerGetStarted = document.createElement('a')
        buyerGetStarted.setAttribute('href', '#')
        buyerGetStarted.innerText = 'Get Started !'
        buyerGetStarted.setAttribute('style', 'text-decoration:none;background-color:white;color:#227ca0;padding:11px;margin-top:11px;width:256px')


        function sellerAppendance() {
            sellerTitle.appendChild(newUnOrder)
            sellerTitle.appendChild(buyerGetStarted)
            newUnOrder.appendChild(newLi)
            newLi.innerText = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        }
        let sellerTitle = document.querySelector('.seller-title')
        sellerTitle.onmouseover = sellerAppendance;

        let sellerGetStarted = document.createElement('a')
        sellerGetStarted.setAttribute('href', '#')
        sellerGetStarted.innerText = '<Link to={"/register"}>Click Here</Link>'
        sellerGetStarted.setAttribute('style', 'text-decoration:none;background-color:white;color:#45bfef;padding:11px;margin-top:11px;width:256px')
   }
        
    render() {
        return (
            <div class="options">
                    <div class="buyer">

                    <Link to={'/register'}>
                        <div class="buyer-title">
                            <div>Buyer <i class="fas fa-angle-double-left"></i></div>
                        </div>
                    </Link>

                    </div>

                <div class="seller">

                <Link to={'/register'}>
                    <div class="seller-title">
                        <div><i class="fas fa-angle-double-right"></i> Seller</div>
                    </div>
                </Link>

                </div>
        
            </div>
        )
    }
}
