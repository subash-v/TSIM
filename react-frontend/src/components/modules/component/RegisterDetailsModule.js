import React, { Component } from "react";
import BottomSlideModal from "./BottomSlideModal";
import styles from "./RegisterDetailsModule.css";
import Back from "../../../images/Back.svg";
import Icon from "../../../core/Icon";
import VerticalStatus from "../../Feed/VerticalStatus";
import time from "../../../images/time-grey.svg";
import calander from "../../../images/Date-grey.svg";
import add_fill from "../../../images/Add_Fill.svg";
import sub from "../../../images/Subtract-Fill-color.svg";
import Button from "../../general/Button";
import Accordion from "../../general/Accordion";
import ControlInput from "../../../core/ControlInput";
import edit from "../../../images/Edit-profile.svg";
import location from "../../../images/Location-white.svg";
import date_blue from "../../../images/Date-blue.svg";
import time_blue from "../../../images/time_blue.svg";
import Counter from "../../general/Counter";
import AttendeeDetails from "./AttendeeDetails";
import HorizantalIconWithHeader from "../../../core/HorizantalIconWithHeader";
import { RAZOR_PAY_ID } from "../../../utils/constant";
export default class RegisterDetailsModule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectTicket: "active",
      attendedetails: "inActive",
      review: "inActive",
      Proceed: 1,
      activeIndex: null,
      name: "",
      email: "",
      mobileno: "",
      name2: "",
      email2: "",
      mobileno2: "",
      counter: 1,
      ticketCounter: [],
      attende1Detials: null,
      attende2Detials: null,
      showInputError: false,
      eventPackages: null,
      registerdAddress: null,
      totalPrice: 0,
      eventId: null
    };
  }
  componentWillReceiveProps = nextProps => {
    let totalPrice = this.state.totalPrice * 1000000;
    if (nextProps && nextProps.paymentDetails) {
      let options = {
        key: RAZOR_PAY_ID,
        amount: totalPrice, // 2000 paise = INR 20, amount in paisa
        name: "Merchant Name",
        description: "Purchase Description",
        image: "/your_logo.png",
        order_id:
          nextProps.paymentDetails &&
          nextProps.paymentDetails.data &&
          nextProps.paymentDetails.data.orderId,
        handler: function(response) {
          let details = {
            referenceId: response.razorpay_payment_id,
            signature: response.razorpay_signature,
            orderId: response.razorpay_order_id
          };
          nextProps.paymentStatus(this.state.eventId, details);
        },
        prefill: {
          name: this.state.attende1Detials.name,
          email: this.state.attende1Detials.email
        },
        notes: {
          address: this.state.registerdAddress
        },
        theme: {
          color: "#F37254"
        }
      };

      let rzp = new window.Razorpay(options);
      rzp.open();
      //this.setState({ Procced: 4 });
    }
  };
  handleButtonClick = () => {
    let eventPages =
      this.props.registerEventList &&
      this.props.registerEventList[0].eventPackages[0];
    let attende = [];
    if (this.state.attende1Detials) {
      attende.push({
        name: this.state.attende1Detials.name,
        email: this.state.attende1Detials.email,
        mobile: this.state.attende1Detials.mobileno,
        primary: true
      });
    }
    if (this.state.attende2Detials) {
      attende.push({
        name: this.state.attende2Detials.name,
        email: this.state.attende2Detials.email,
        mobile: this.state.attende2Detials.mobileno
      });
    }
    if (this.state.Proceed == 3) {
      this.setState({
        registerdAddress: attende,
        totalPrice: this.state.counter * eventPages.price,
        eventId: this.props.registerEventList[0].eventSlotId
      });
      let data = {
        userId: 3,
        slotId: this.props.registerEventList[0].eventSlotId,
        seats: [
          {
            packageId: eventPages.eventPackageId,
            noOfSeats: this.state.counter,
            price: this.state.counter * eventPages.price
          }
        ],
        attendees: [...attende]
      };
      this.props.bookEvent(this.props.registerEventList[0].eventSlotId, data);
    } else if (this.state.Proceed == 4) {
      this.props.closeModal();
      window.scrollTo(0, 0);
    } else {
      if (this.state.Proceed == 2) {
        let attendeDetails = this.state.attende1Detials;
        let attende2Details = this.state.attende2Detials;
        if (
          attendeDetails &&
          attendeDetails.name &&
          attendeDetails.email &&
          attendeDetails.mobileno
        ) {
          this.setState({ Proceed: this.state.Proceed + 1 });
          window.scrollTo(0, 0);
        } else if (
          attende2Details &&
          attende2Details.name &&
          attende2Details.email &&
          attende2Details.mobileno
        ) {
          this.setState({ Proceed: this.state.Proceed + 1 });
          window.scrollTo(0, 0);
        } else {
          this.setState({ showInputError: true });
        }
      } else {
        this.setState({ Proceed: this.state.Proceed + 1 });
        window.scrollTo(0, 0);
      }
    }
  };
  goBack = () => {
    if (this.state.Proceed != 1) {
      this.setState({ Proceed: this.state.Proceed - 1 });
    }
    if (this.state.Proceed == 1) {
      this.props.closeModal();
    }
  };
  setTicketCounter = val => {
    this.setState({ counter: val });
  };
  setcounter = (val, name) => {
    let newData = [];
    let dataExist =
      this.state.ticketCounter &&
      this.state.ticketCounter.length > 0 &&
      this.state.ticketCounter.find((ticket, i) => {
        return ticket.name === name;
      });
    if (this.state.ticketCounter.length < 1) {
      newData.push({ name: name, counter: val });
      this.setState({ ticketCounter: newData });
    } else {
      if (dataExist) {
        var index = this.state.ticketCounter.findIndex(function(ticket) {
          return ticket.name == dataExist.name;
        });
        newData.push(...this.state.ticketCounter);
        newData[index].name = name;
        newData[index].counter = val;
      } else {
        newData.push(...this.state.ticketCounter);
        newData.push({ name: name, counter: val });
        this.setState({ ticketCounter: newData });
      }
    }
  };
  onOpenAccordian = activeIndex => {
    this.setState({
      activeIndex
    });
  };
  addAttende1Details = val => {
    this.setState({ attende1Detials: val, showInputError: false });
  };
  addAttende2Details = val => {
    this.setState({ attende2Detials: val, showInputError: false });
  };
  render() {
    return (
      <React.Fragment>
        <div
          className={styles.showCross}
          onClick={() => this.props.closeModal()}
        />
        <BottomSlideModal>
          <div className={styles.modalBase}>
            <div className={styles.registerHeader}>
              <div className={styles.icon} onClick={() => this.goBack()}>
                <Icon image={Back} size={22} />
              </div>
              <div className={styles.registerText}>Registration Details</div>
            </div>
            {this.state.Proceed !== 6 && (
              <div className={styles.verticalScroller}>
                <VerticalStatus
                  first={
                    this.state.Proceed == 1
                      ? "active"
                      : this.state.Proceed > 1 && "complete"
                  }
                  second={
                    this.state.Proceed == 2
                      ? "active"
                      : this.state.Proceed > 2 && "complete"
                  }
                  third={
                    this.state.Proceed > 2
                      ? "active"
                      : this.state.Proceed > 3 && "complete"
                  }
                />
              </div>
            )}

            <div className={styles.contentHolder}>
              <div className={styles.selectHeader}>
                {this.state.Proceed == 2
                  ? "Add attendee details"
                  : this.state.Proceed === 3
                  ? "Review Order"
                  : this.state.Proceed === 4
                  ? "Payment Confirmation"
                  : "Select number of tickets"}
              </div>
              {this.state.Proceed < 3 && (
                <div className={styles.buildingBlocks}>
                  {this.props.eventDetails && this.props.eventDetails.title}
                </div>
              )}
              {this.state.Proceed < 3 && (
                <div className={styles.advanceText}>
                  {this.props.eventDetails &&
                    this.props.eventDetails.eventLevel}
                </div>
              )}{" "}
              {this.state.Proceed === 1 && (
                <div className={styles.registerStaticDetails}>
                  <div className={styles.iconWithText}>
                    <HorizantalIconWithHeader
                      icon={calander}
                      spacing={"7px"}
                      size={15}
                      text={
                        this.props.registerEventList &&
                        this.props.registerEventList[0].date
                      }
                    />
                  </div>
                  <div className={styles.iconWithText}>
                    <HorizantalIconWithHeader
                      spacing={"7px"}
                      icon={time}
                      size={15}
                      text={`${this.props.registerEventList &&
                        this.props.registerEventList[0].endTime}-
                        ${this.props.registerEventList &&
                          this.props.registerEventList[0].endTime}`}
                    />
                  </div>
                  {this.props.registerEventList &&
                    this.props.registerEventList[0].eventPackages &&
                    this.props.registerEventList[0].eventPackages.map(val => {
                      return (
                        <div className={styles.personHolder}>
                          <div className={styles.textHolder}>
                            <div className={styles.personText}>
                              {val.seatCategory}
                            </div>
                            <div className={styles.cost}>
                              INR {val.price} per person
                            </div>
                          </div>
                          <div className={styles.counter}>
                            <Counter
                              value={this.state.counter}
                              setvalue={val => this.setTicketCounter(val)}
                              max={val.maxBookingAllowed}
                            ></Counter>
                          </div>
                        </div>
                      );
                    })}
                </div>
              )}
              {/* {this.state.Proceed == 2 && (
                <div className={styles.accordianHolder}>
                  {/* {accordianDeatils.map((val, i) => {
                    return (
                      <Accordion
                        offset={"10px 0"}
                        key={i}
                        image={val.icon}
                        size={15}
                        fontColor={"#4F409C"}
                        fontSize={"14px"}
                        currentAccordian={i}
                        text={val.header}
                        onOpen={index => this.onOpenAccordian(index)}
                        activeIndex={this.state.activeIndex}
                      >
                        {val.data &&
                          val.data.map(details => {
                            return (
                              <div className={styles.dataHolder}>
                                <Button
                                  type="primary"
                                  backgroundColor={"#D1CFE3"}
                                  fontColor={"#4F439A"}
                                  height={50}
                                  width={170}
                                  label={details.time}
                                  borderRadius={5}
                                />
                              </div>
                            );
                          })}
                      </Accordion>
                    );
                  })} */}
              {/* {ticketDetails.map((val, i) => {
                    return (
                      <Accordion
                        offset={"10px 0"}
                        key={3}
                        image={val.icon}
                        size={15}
                        fontColor={"#4F409C"}
                        fontSize={"14px"}
                        currentAccordian={3}
                        text={val.header}
                        onOpen={index => this.onOpenAccordian(index)}
                        activeIndex={this.state.activeIndex}
                      >
                        {val.data &&
                          val.data.map(details => {
                            return (
                              <div className={styles.personHolder}>
                                <div className={styles.textHolder}>
                                  <div className={styles.personText}>
                                    {details.heading}
                                  </div>
                                  <div className={styles.cost}>
                                    {details.subHeading}
                                    <span className={styles.remaining}>
                                      {details.count}
                                    </span>
                                  </div>
                                </div>
                                <div className={styles.counter}>
                                  <Counter
                                    value={this.state.counter}
                                    setvalue={val =>
                                      this.setcounter(val, details.heading)
                                    }
                                  ></Counter>
                                </div>
                              </div>
                            );
                          })}
                      </Accordion>
                    );
                  })} 
                </div>
              )} */}
              {this.state.Proceed == 2 && (
                <div className={styles.attenderHolder}>
                  <div className={styles.attendes}>
                    <AttendeeDetails
                      title={"Attendee 1"}
                      onChange={val => this.addAttende1Details(val)}
                      showInputError={this.state.showInputError}
                    />
                  </div>
                  <div className={styles.Attendes}>
                    <AttendeeDetails
                      title={"Attendee 2"}
                      subTitle={"Optional"}
                      onChange={val => this.addAttende2Details(val)}
                    />
                  </div>
                </div>
              )}
              {(this.state.Proceed == 3 || this.state.Proceed == 4) &&
                this.props.registerEventList &&
                this.props.registerEventList[0].eventPackages &&
                this.props.registerEventList[0].eventPackages.map(val => {
                  return (
                    <div className={styles.reviewHolder}>
                      <div className={styles.orderHeaderHolder}>
                        <div className={styles.orderHeader}>ORDER SUMMARY</div>
                        <div className={styles.editIconHolder}>
                          <Icon image={edit} size={30} />
                        </div>
                      </div>
                      <div className={styles.reviewDetailsHolder}>
                        <div className={styles.buildingBlocks}>
                          Building a Strong Personal Brand by Uma Kasoji
                        </div>
                        <div className={styles.advanceText}>Advanced Level</div>
                        <div className={styles.iconWithText}>
                          <HorizantalIconWithHeader
                            icon={time}
                            size={15}
                            text={`${this.props.registerEventList &&
                              this.props.registerEventList[0].endTime}-
                                ${this.props.registerEventList &&
                                  this.props.registerEventList[0].endTime}`}
                          />
                        </div>
                        <div className={styles.iconWithText}>
                          <HorizantalIconWithHeader
                            icon={calander}
                            size={15}
                            text={
                              this.props.registerEventList &&
                              this.props.registerEventList[0].date
                            }
                          />
                        </div>

                        <div className={styles.iconWithText}>
                          <HorizantalIconWithHeader
                            icon={location}
                            size={15}
                            text={
                              this.props.eventDetails &&
                              this.props.eventDetails.eventAddress
                            }
                          />
                        </div>
                        <div className={styles.iconWithText}>
                          <HorizantalIconWithHeader
                            icon={location}
                            size={15}
                            text={`${val.price} x ${this.state.counter} Tickets`}
                          />
                        </div>

                        <div className={styles.attendeeText}>
                          Attendee:{" "}
                          <div>
                            {this.state.attende1Detials &&
                              this.state.attende1Detials.name}
                          </div>
                        </div>
                        {this.state.Proceed === 4 && (
                          <div className={styles.attendeeText}>
                            (PAYMENT DONE THROUGH DEBIT CARD)
                            <div>
                              Webinar link is sent on{" "}
                              {this.state.attende1Detials &&
                                this.state.attende1Detials.email}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              <div
                className={
                  this.state.Proceed == 3 || this.state.Proceed == 2
                    ? styles.attendeStyle
                    : styles.amountHolder
                }
              >
                {this.state.Proceed != 3 &&
                  this.state.Proceed != 2 &&
                  this.props.registerEventList &&
                  this.props.registerEventList[0].eventPackages &&
                  this.props.registerEventList[0].eventPackages.map(val => {
                    return (
                      <div className={styles.textHolder}>
                        <div className={styles.total}>Total</div>
                        <div className={styles.amount}>
                          INR {val.price * this.state.counter}{" "}
                          {this.state.Proceed > 4 && (
                            <span className={styles.taxes}>
                              (inclusive of all taxes)
                            </span>
                          )}
                        </div>
                      </div>
                    );
                  })}

                {this.state.Proceed <= 3 ? (
                  <div
                    className={styles.button}
                    onClick={() => this.handleButtonClick()}
                  >
                    {" "}
                    <Button
                      type="primary"
                      backgroundColor={"#4F439A"}
                      fontColor={"#fff"}
                      height={50}
                      width={170}
                      label="Proceed"
                      borderRadius={5}
                    />
                  </div>
                ) : (
                  <div
                    className={styles.button}
                    onClick={() => this.props.closeModal()}
                  >
                    <Button
                      type="primary"
                      backgroundColor={"#4F439A"}
                      fontColor={"#fff"}
                      height={50}
                      width={170}
                      label="BACK TO EVENTS"
                      borderRadius={5}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </BottomSlideModal>
      </React.Fragment>
    );
  }
}
