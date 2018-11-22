import { Component, OnInit, ViewChild } from '@angular/core';
import {Popup} from 'ng2-opd-popup';

@Component({
  selector: 'app-multiplepopup',
  templateUrl: './multiplepopup.component.html',
  styleUrls: ['./multiplepopup.component.css']
})
export class MultiplepopupComponent implements OnInit {

  email:string;
  password:string;

  constructor() { }
  @ViewChild('popup1') popup1: Popup;
  @ViewChild('popup2') popup2: Popup;
  @ViewChild('popup3') popup3: Popup;
  @ViewChild('popup4') popup4: Popup;
  @ViewChild('popup5') popup5: Popup;
  ngOnInit() {
  }


  showPopup1(){
    this.popup1.options = {header: 'Your custom header',
    color: '#5cb85c', // red, blue....
    widthProsentage: 40, // The with of the popou measured by browser width
    animationDuration: 1, // in seconds, 0 = no animation
    showButtons: true, // You can hide this in case you want to use custom buttons
    confirmBtnContent: 'OK', // The text on your confirm button
    cancleBtnContent: 'Cancel', // the text on your cancel button
    confirmBtnClass: 'btn btn-default', // your class for styling the confirm button
    cancleBtnClass: 'btn btn-default', // you class for styling the cancel button
    animation: 'fadeInDown' // 'fadeInLeft', 'fadeInRight', 'fadeInUp', 'bounceIn','bounceInDown'
  }
    this.popup1.show(this.popup1.options);
  }

  showPopup2(){
    this.popup2.options = {
            cancleBtnClass: "btn btn-default",
            confirmBtnClass: "btn btn-default",
            cancleBtnContent: 'Cancel',
            color: "#5cb85c",
            header: "Size 60% of page - color = #5cb85c",
            widthProsentage:60,
            animation:"fadeInUp"}
    this.popup2.show(this.popup2.options);
  }

  showPopup3(){
    this.popup3.options = {
            cancleBtnClass: "btn btn-default",
            confirmBtnClass: "btn btn-default",
            color: "#333",
            header: "Animations...",
            widthProsentage:60,
            animation: "bounceIn"}
    this.popup3.show(this.popup3.options);
  }

  showPopup4(){
    this.popup4.options = {
            cancleBtnClass: "btn btn-default",
            confirmBtnClass: "btn btn-default",
            color: "#5cb85c",
            header: "Events...",
            widthProsentage:50,
            animation: "bounceInDown"}
    this.popup4.show(this.popup4.options);
  }

  showPopup5(){
    this.popup5.options = {
            cancleBtnClass: "btn btn-default",
            confirmBtnClass: "btn btn-mbe-attack",
            color: "#A0DE4F",
            header: "Login...",
            widthProsentage:50,
            animation: "bounceInDown",
            confirmBtnContent: "Login"}
    this.popup5.show(this.popup5.options);
  }

  YourConfirmEvent(){
    alert('You cliked confirm');
    this.popup4.hide();
  }

  login(){
    alert('Email: ' + this.email + '  Password: ' + this.password);
    this.popup5.hide();
  }

}
