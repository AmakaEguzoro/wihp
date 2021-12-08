import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-stripe",
  templateUrl: "./stripe.component.html",
  styleUrls: ["./stripe.component.css"],
})
export class StripeComponent implements OnInit {
  constructor() {}
  handler: any = null;
  ngOnInit() {
    this.loadStripe();
  }
  pay(amount: any) {
    var handler = (<any>window).StripeCheckout.configure({
      key: "pk_test_51JIBBGIgx3ixEZOKXDjj6fRhOu8kdAnjp9U6tLotiWz7kEqBMmgZN95cEsbiBFLLICQQqh42BIWZuvckFybUye2a00zyppqITQ",
      locale: "auto",
      token: function (token: any) {
        console.log(token);
        alert("Token Created!!");
      },
    });

    handler.open({
      name: "Demo Site",
      description: "2 widgets",
      amount: amount * 100,
    });
  }

  loadStripe() {
    if (!window.document.getElementById("stripe.script")) {
      var s = window.document.createElement("script");
      s.id = "stripe.script";
      s.type = "text/javascript";
      s.src = "https://checkout.stripe.com/checkout.js";
      s.onload = () => {
        this.handler = (<any>window).StripeCheckout.configure({
          key: "shxvv",
          token: function (token: any) {
            console.log(token);
            alert("Payment Success!!");
          },
        });
      };
    }
  }
}
