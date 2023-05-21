import { BiChevronDown, BiChevronUp, BiExpandVertical } from "react-icons/bi";
import React, { useState } from "react";
import Image from "next/image";

import ChangeCircleIcon from "@/icons/ChangeCircleIcon";
import DottyCircleIcon from "@/icons/DottyCircleIcon";
import OfferLoanImg from "@/assets/img/cherry-offer-loan.png";
import RequestLoanImg from "@/assets/img/cherry-request-loan.png";

import Button from "./Button";
import ButtonCard from "./ButtonCard";
import Dropdown from "./Dropdown";
import FundsSwitch from "./FundsSwitch";
import Modal from "./Modal";
import MultiStep from "./MultiStep";
import SummaryHeader from "./SummaryHeader";
import Table from "./Table";
import Tabs from "./Tabs";
import Tooltip from "./Tooltip";

const LoansSection = () => {
  const lendHeaders = [
    { label: "Filters" },
    { label: "You Give" },
    { label: "User Locks Up" },
    { label: "You Earn" },
    { label: "Term" },
  ];

  const lendModalHeaders = [
    { title: "Loan", subtitle: "Amount you are lending" },
    { title: "Term", subtitle: "Must be repaid in" },
    { title: "Interest", subtitle: "Amount you get paid" },
    { title: "Collateral", subtitle: "Amount locked by borrower" },
  ];

  const lendRequestModalHeaders = [
    { title: "Loan", subtitle: "Amount you are lending" },
    { title: "Term", subtitle: "Borrower must repay in" },
    { title: "You Earn", subtitle: "Interest earned" },
    { title: "Collateral", subtitle: "Amount borrower must lock" },
  ];

  const lendData = Array(8)
    .fill(0)
    .map((_) => ({
      type: "lend",
      info: {
        rating: 1523,
        healthy: true,
      },
      token: {
        amount: 10000,
        name: "DJED",
      },
      convertedToken: {
        amount: 23534,
        name: "ADA",
      },
      lockedUpToken: {
        amount: 10000,
        name: "ADA",
      },
      aprToken: {
        amount: 123.34,
        name: "ADA",
      },
      percentage: 2.53,
      apr: 60.45,
      term: 30,
    }));

  const borrowHeaders = [
    { label: "Filters" },
    { label: "You Get" },
    { label: "You Lock Up" },
    { label: "You Pay (Interest)" },
    { label: "Term" },
  ];

  const borrowModalHeaders = [
    { title: "Loan", subtitle: "Amount you will receive" },
    { title: "Term", subtitle: "Must be repaid in" },
    { title: "Interest", subtitle: "Amount you pay the lender" },
    { title: "Collateral", subtitle: "Amount you leave as security" },
  ];

  const borrowRequestModalHeaders = [
    { title: "Loan", subtitle: "Amount you will receive" },
    { title: "Term", subtitle: "Must be repaid in" },
    { title: "Interest", subtitle: "Amount you pay lender" },
    { title: "Collateral", subtitle: "Amount you lock" },
  ];

  const borrowData = Array(4)
    .fill(0)
    .map((_) => ({
      type: "borrow",
      info: {
        rating: 1523,
        healthy: true,
      },
      token: {
        amount: 10000,
        name: "DJED",
      },
      convertedToken: {
        amount: 23534,
        name: "ADA",
      },
      lockedUpToken: {
        amount: 10000,
        name: "ADA",
      },
      aprToken: {
        amount: 123.34,
        name: "ADA",
      },
      percentage: 2.53,
      apr: 60.45,
      term: 30,
    }));

  const tabs = [
    {
      label: "Lend",
      content: (
        <Table
          headers={lendHeaders}
          modalHeaders={lendModalHeaders}
          data={lendData}
          onConfirm={() => {
            null;
          }}
        />
      ),
      tooltipText: "Tooltip for Lend",
      badgeNumber: lendData.length,
    },
    {
      label: "Borrow",
      content: (
        <Table
          headers={borrowHeaders}
          modalHeaders={borrowModalHeaders}
          data={borrowData}
          onConfirm={() => {
            null;
          }}
        />
      ),
      tooltipText: "Tooltip for Borrow",
      badgeNumber: borrowData.length,
    },
  ];

  const [activeTab, setActiveTab] = useState(0);
  const [checked, setChecked] = useState(false);

  const handleSwitch = (checked: boolean) => {
    setChecked(checked);
  };

  const sorts = ["Unsorted", "Newest to oldest", "Oldest to newest"];
  const sortsIcons = [BiExpandVertical, BiChevronDown, BiChevronUp];

  const [sort, setSort] = useState(0);

  const handleSortClick = () => {
    setSort((sort) => (sort + 1) % sorts.length);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const previousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const types: {
    lend: string;
    borrow: string;
    [key: string]: string;
  } = {
    lend: "Offer Loan",
    borrow: "Request Loan",
  };

  const tokens = [
    "ADA",
    "cBTC",
    "CHRY",
    "cNETA",
    "Minswap",
    "ADA",
    "cBTC",
    "CHRY",
    "cNETA",
    "Minswap",
    "Minswap",
  ];

  const initialRequestData = {
    type: "",
    numOfTokens: 6,
    token: "",
    tokenAmount: "",
    interest: {
      days: "",
      hours: "",
      token: tokens[0],
      value: "",
      ext: "",
    },
    lockedNumOfTokens: 6,
    lockedToken: "",
    lockedTokenAmount: "",
  };

  const collateral = {
    recommended: 731.25,
    minimum: 492.38,
  };

  const [requestData, setRequestData] = useState(initialRequestData);

  const handleRequestData: (key: string, value: string | number) => void = (
    key,
    value
  ) => {
    setRequestData({ ...requestData, [key]: value });
  };

  const handleInterestData: (key: string, value: string | number) => void = (
    key,
    value
  ) => {
    setRequestData({
      ...requestData,
      interest: { ...requestData.interest, [key]: value },
    });
  };

  const handleCreateRequestClick = () => {
    setCurrentStep(0);
    setRequestData(initialRequestData);
    setIsChecked(false);
    openModal();
  };

  const [isChecked, setIsChecked] = useState(false);

  const steps = [
    {
      label: "Type",
      content: (
        <div className="flex space-x-4 justify-center">
          <ButtonCard
            onClick={() => {
              handleRequestData("type", "lend");
              nextStep();
            }}
            title="Offer Loan"
            imageSrc={OfferLoanImg}
            description="Create loan to allow borrowers to use your tokens."
          />
          <ButtonCard
            onClick={() => {
              handleRequestData("type", "borrow");
              nextStep();
            }}
            title="Request Loan"
            imageSrc={RequestLoanImg}
            description="Deposit tokens to receive a loan."
          />
        </div>
      ),
    },
    {
      label: "Loan",
      content: requestData.token ? (
        <div className="flex flex-col items-center tracking-tight space-y-2">
          <p>
            Enter the amount you want to{" "}
            {requestData.type === "lend" ? "offer" : "receive"}
          </p>
          <div className="flex gap-4 flex-wrap max-w-xs justify-center">
            <Image
              src={`/images/tokens/${requestData.token.toLowerCase()}.png`}
              alt={requestData.token}
              width={70}
              height={70}
            />
          </div>

          <button
            onClick={() => handleRequestData("token", "")}
            className="text-[#B759AD] dark:text-[#FF8AF0] hover:opacity-80 flex items-center font-extrabold space-x-1 tracking-tighter transition"
          >
            <ChangeCircleIcon className="w-5 h-5" />
            <span>Switch token</span>
          </button>
          <input
            placeholder="(max: 885.71977)"
            value={requestData.tokenAmount.toLocaleString()}
            onChange={(e) =>
              handleRequestData("tokenAmount", e.target.value.trim())
            }
            className="border-2 border-[#FDECFD]/60 rounded-xl bg-[#363636]/20 shadow-md text-sm p-3 placeholder:text-black/40 dark:placeholder:text-white/60 font-extrabold"
          />
          {requestData.type === "borrow" && (
            <p className="text-center">
              This is the amount you will receive from the lender. You will have
              to return the same loan amount to the lender plus interest before
              your loan expires.
            </p>
          )}
          <div className="grid grid-cols-2 gap-4 w-full">
            <Button
              onClick={() => handleRequestData("token", "")}
              className="button-modal"
            >
              Back
            </Button>
            <Button
              onClick={nextStep}
              disabled={!requestData.tokenAmount}
              className="button-modal-fill"
            >
              Next
            </Button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center tracking-tight space-y-4">
          <p>
            Which token would you like to{" "}
            {requestData.type === "lend" ? "offer to borrowers" : "borrow"}?
          </p>
          <div className="flex gap-4 flex-wrap max-w-sm justify-center">
            {tokens.map(
              (token, i) =>
                i < requestData.numOfTokens && (
                  <button
                    key={token + i}
                    onClick={() => handleRequestData("token", token)}
                    className="hover:scale-110 active:scale-95 transition"
                  >
                    <Image
                      src={`/images/tokens/${token.toLowerCase()}.png`}
                      alt={token}
                      width={50}
                      height={50}
                    />
                  </button>
                )
            )}
          </div>
          {requestData.numOfTokens < tokens.length && (
            <button
              onClick={() =>
                handleRequestData(
                  "numOfTokens",
                  requestData.numOfTokens + 6 < tokens.length
                    ? requestData.numOfTokens + 6
                    : tokens.length
                )
              }
              className="text-[#B759AD] dark:text-[#FF8AF0] hover:opacity-80 flex items-center font-extrabold space-x-1 tracking-tighter transition"
            >
              <DottyCircleIcon className="w-5 h-5" />
              <span>More</span>
            </button>
          )}
          <Button onClick={previousStep} className="button-modal !max-w-sm">
            Back
          </Button>
        </div>
      ),
    },
    {
      label: "Interest",
      content: (
        <div className="flex flex-col items-center tracking-tight space-y-4">
          <p className="text-center">
            Select the loan duration and the interest rate{" "}
            {requestData.type === "lend"
              ? "that the borrower will have to pay when returning the loan"
              : "you are willing to pay when repaying your loan"}
            .
          </p>
          <div className="grid grid-cols-6 gap-2 place-items-center relative">
            <p className="text-center">Loan term:</p>
            <div className="col-span-2 w-full relative">
              <input
                placeholder="Enter days"
                value={requestData.interest.days}
                onChange={(e) =>
                  handleInterestData("days", e.target.value.trim())
                }
                className="w-full border-2 border-[#FDECFD]/60 rounded-xl bg-[#363636]/20 shadow-md text-sm p-3 placeholder:text-black/40 dark:placeholder:text-white/60 font-extrabold relative"
              />
            </div>
            <input
              placeholder="Enter hours"
              value={requestData.interest.hours}
              onChange={(e) =>
                handleInterestData("hours", e.target.value.trim())
              }
              className="col-span-2 w-full border-2 border-[#FDECFD]/60 rounded-xl bg-[#363636]/20 shadow-md text-sm p-3 placeholder:text-black/40 dark:placeholder:text-white/60 font-extrabold"
            />
          </div>
          <div className="grid grid-cols-6 gap-2 place-items-center pb-3">
            <p className="text-center">Interest:</p>
            <div className="col-span-2 w-full">
              <Dropdown
                options={tokens.map((token) => ({
                  label: token,
                  value: token,
                }))}
                onOptionSelect={(option) => {
                  handleInterestData("interestToken", option.value);
                }}
                className="col-span-2 dropdown-modal"
              />
            </div>
            <div className="w-full col-span-2 relative">
              <input
                placeholder="Enter %"
                value={requestData.interest.value}
                onChange={(e) =>
                  handleInterestData("value", e.target.value.trim())
                }
                className="w-full border-2 border-[#FDECFD]/60 rounded-xl bg-[#363636]/20 shadow-md text-sm p-3 placeholder:text-black/40 dark:placeholder:text-white/60 font-extrabold"
              />
              <small className="uppercase absolute -bottom-6 left-3">
                Recommended: <span className="text-[#ff6dc0]">0.00%</span>
              </small>
            </div>
            <input
              placeholder="--"
              value={requestData.interest.ext}
              onChange={(e) => handleInterestData("ext", e.target.value.trim())}
              className="border-2 w-full border-[#FDECFD]/60 rounded-xl bg-[#D973B0]/40 shadow-md text-sm p-3 placeholder:text-black/40 dark:placeholder:text-white/60 font-extrabold"
            />
          </div>
          <p className="text-center">
            {requestData.type === "lend"
              ? "Interest will start to accrue only after the borrower claims the assets. Repaying the loan earlier will reduce the interest to be paid"
              : "You will have to pay minimum 20% of the interest amount"}
            .
          </p>
          <div className="grid grid-cols-2 gap-4 w-full">
            <Button onClick={previousStep} className="button-modal">
              Back
            </Button>
            <Button
              onClick={nextStep}
              disabled={
                !Object.values(requestData.interest).every((value) => value)
              }
              className="button-modal-fill"
            >
              Next
            </Button>
          </div>
        </div>
      ),
    },
    {
      label: "Collateral",
      content: requestData.lockedToken ? (
        <div className="flex flex-col items-center tracking-tight space-y-2">
          <p className="text-center">
            Enter collateral amount{" "}
            {requestData.type === "borrow" &&
              "to deposit into the smart contract. You can also set a request expiration date"}
            .
          </p>
          <div className="flex gap-4 flex-wrap max-w-xs justify-center">
            <Image
              src={`/images/tokens/${requestData.lockedToken.toLowerCase()}.png`}
              alt={requestData.lockedToken}
              width={70}
              height={70}
            />
          </div>

          <button
            onClick={() => handleRequestData("lockedToken", "")}
            className="text-[#B759AD] dark:text-[#FF8AF0] hover:opacity-80 flex items-center font-extrabold space-x-1 tracking-tighter transition"
          >
            <ChangeCircleIcon className="w-5 h-5" />
            <span>Switch token</span>
          </button>
          <input
            placeholder="Enter amount"
            value={requestData.lockedTokenAmount.toLocaleString()}
            onChange={(e) =>
              handleRequestData("lockedTokenAmount", e.target.value.trim())
            }
            className="border-2 border-[#FDECFD]/60 rounded-xl bg-[#363636]/20 shadow-md text-sm p-3 placeholder:text-black/40 dark:placeholder:text-white/60 font-extrabold"
          />
          <div className="flex flex-col space-y-1">
            <small className="uppercase">
              Recommended:{" "}
              <span className="text-[#F8008D]">{collateral.recommended}</span>
            </small>
            <small className="uppercase">
              Minimum:{" "}
              <span className="text-[#F40B0B]">{collateral.minimum}</span>
            </small>
          </div>
          <div className="grid grid-cols-2 gap-4 w-full">
            <Button
              onClick={() => handleRequestData("lockedToken", "")}
              className="button-modal"
            >
              Back
            </Button>
            <Button
              onClick={nextStep}
              disabled={
                !requestData.lockedTokenAmount ||
                parseFloat(requestData.lockedTokenAmount) < collateral.minimum
              }
              className="button-modal-fill"
            >
              Next
            </Button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center tracking-tight space-y-4">
          <p>
            {requestData.type === "lend"
              ? "Select the token the borrower will lock as collateral"
              : "Select the collateral token you will deposit into the smart contract"}
            .
          </p>
          <div className="flex gap-4 flex-wrap max-w-sm justify-center">
            {tokens.map(
              (token, i) =>
                i < requestData.lockedNumOfTokens && (
                  <button
                    key={token + i}
                    onClick={() => handleRequestData("lockedToken", token)}
                    className="hover:scale-110 active:scale-95 transition"
                  >
                    <Image
                      src={`/images/tokens/${token.toLowerCase()}.png`}
                      alt={token}
                      width={50}
                      height={50}
                    />
                  </button>
                )
            )}
          </div>
          {requestData.lockedNumOfTokens < tokens.length && (
            <button
              onClick={() =>
                handleRequestData(
                  "lockedNumOfTokens",
                  requestData.lockedNumOfTokens + 6 < tokens.length
                    ? requestData.lockedNumOfTokens + 6
                    : tokens.length
                )
              }
              className="text-[#B759AD] dark:text-[#FF8AF0] hover:opacity-80 flex items-center font-extrabold space-x-1 tracking-tighter transition"
            >
              <DottyCircleIcon className="w-5 h-5" />
              <span>More</span>
            </button>
          )}
          {requestData.type === "borrow" && (
            <>
              <p className="text-center">
                Your collateral guarantees that the lender will get reimbursed
                if you don’t repay the loan on time.
              </p>
              <small className="text-center">
                Disclaimer: Your loan can be liquidated, resulted in the loss of
                your collateral in favor of the lender. Read more about it here
              </small>
            </>
          )}
          <Button onClick={previousStep} className="button-modal !max-w-sm">
            Back
          </Button>
        </div>
      ),
    },
    {
      label: "Confirmation",
      content: (
        <div className="flex flex-col items-center tracking-tight space-y-2">
          <div className="font-bold grid grid-cols-2 place-items-center gap-4 w-full max-w-md">
            <SummaryHeader
              {...(requestData.type === "lend"
                ? lendRequestModalHeaders[0]
                : borrowRequestModalHeaders[0])}
            />
            <div className="px-6 w-full">
              <p className="tracking-tighter text-lg -mb-2 text-[#E871DC] drop-shadow">{`${parseInt(
                requestData.tokenAmount
              ).toLocaleString()} 
        ${requestData.token}`}</p>
              <small className="tracking-tight opacity-60">
                {`(~${lendData[0].convertedToken.amount.toLocaleString()}
        ${lendData[0].convertedToken.name})`}
              </small>
            </div>
            <SummaryHeader
              {...(requestData.type === "lend"
                ? lendRequestModalHeaders[1]
                : borrowRequestModalHeaders[1])}
            />
            <div className="px-6 w-full">
              <p className="tracking-tighter text-lg -mb-2 text-[#E871DC] drop-shadow">
                {requestData.interest.days} days {requestData.interest.hours}{" "}
                hours
              </p>
            </div>
            <SummaryHeader
              {...(requestData.type === "lend"
                ? lendRequestModalHeaders[2]
                : borrowRequestModalHeaders[2])}
            />
            <div className="px-6 w-full">
              <p className="tracking-tighter text-lg -mb-2 text-[#E871DC] drop-shadow">
                {`${lendData[0].aprToken.amount.toLocaleString()} 
        ${lendData[0].aprToken.name}`}
              </p>
              <small className="tracking-tight opacity-60">
                {`(${lendData[0].percentage.toLocaleString()}%)`}
              </small>
            </div>
            <SummaryHeader
              {...(requestData.type === "lend"
                ? lendRequestModalHeaders[3]
                : borrowRequestModalHeaders[3])}
            />
            <div className="px-6 w-full relative">
              <p className="tracking-tighter text-lg -mb-2 text-[#E871DC] drop-shadow relative">
                <span className="relative">
                  {`${lendData[0].lockedUpToken.amount.toLocaleString()} 
        ${lendData[0].lockedUpToken.name}`}
                  {requestData.type === "lend" && (
                    <Tooltip
                      id="request-modal-tooltip"
                      content={lendData[0].info.rating}
                    />
                  )}
                </span>
              </p>
            </div>
            {requestData.type === "lend" && (
              <label
                htmlFor="agreement"
                className="col-span-2 flex items-center space-x-1"
              >
                <input
                  type="radio"
                  id="agreement"
                  className=""
                  onChange={() => setIsChecked(true)}
                />
                <span>I understand the risks of possible liquidation</span>
              </label>
            )}
          </div>
          <div className="grid grid-cols-2 gap-4 w-full">
            <Button onClick={previousStep} className="button-modal">
              {requestData.type === "lend" ? "Back" : "Decline"}
            </Button>
            <Button
              onClick={closeModal}
              disabled={requestData.type === "lend" && !isChecked}
              className="button-modal-fill"
            >
              {requestData.type === "lend" ? "Confirm" : "Request"}
            </Button>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="md:col-span-2">
      <h2 className="ml-4 text-2xl font-bold tracking-tight mb-3">
        Loans Available
      </h2>
      <div className="border-4 p-4 border-[#E88CB5]/75 dark:border-[#E88CB5]/75 rounded-2xl bg-table-light bg-opacity-70 dark:bg-table-dark overflow-hidden">
        <div className="w-full">
          <div className="max-sm:space-y-2 md:flex md:justify-between">
            <Tabs
              tabs={tabs}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
            <FundsSwitch checked={checked} onChange={handleSwitch} />
            <div className="flex max-sm:[&>button]:w-full space-x-4">
              <Button onClick={handleSortClick} icon={sortsIcons[sort]}>
                {sorts[sort]}
              </Button>
              <Button onClick={handleCreateRequestClick}>Create Request</Button>
              <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                title={
                  !requestData.type ? `Create Request` : types[requestData.type]
                }
              >
                <div className="font-bold p-4">
                  <MultiStep steps={steps} currentStep={currentStep} />
                </div>
              </Modal>
            </div>
          </div>
          <div className="mt-4">{tabs[activeTab].content}</div>
        </div>
      </div>
    </div>
  );
};

export default LoansSection;
