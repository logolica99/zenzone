"use client";
import React, { useContext, useState } from "react";
import { AppContext } from "../Contexts/AppContext";
import FeedbackModal from "./FeedbackModal";

export default function AppBar() {
  const { appState } = useContext(AppContext);
  const [appActiveState, setAppActiveState] = appState;

  const [isFeedbackModalOpen, setIsFeedbackModalOpen] = useState(false);

  function openFeedbackModal() {
    setIsFeedbackModalOpen(true);
  }

  return (
    <>
      <FeedbackModal
        isOpen={isFeedbackModalOpen}
        setOpen={setIsFeedbackModalOpen}
      />
      <div
        className="absolute left-4 mt-[10vh]  flex  h-[88vh] flex-col items-center justify-between rounded-md border border-zinc-700 bg-zinc-800 px-1 py-6 text-zinc-400"
        style={{ zIndex: 9999 }}
      >
        <div className="flex flex-col items-center gap-5 ">
          <div
            className="relative flex w-full cursor-pointer flex-col items-center rounded-md  py-1  transition duration-150 ease-in-out hover:bg-zinc-200/20"
            onClick={() =>
              setAppActiveState({
                ...appActiveState,
                timer: !appActiveState.timer,
              })
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="27"
              height="27"
              viewBox="2 2 20 20"
              fill="none"
            >
              <path
                fill={`${appActiveState.timer ? "#F7A928" : "#a9a9a9"}`}
                d="M8.01 3.929a.76.76 0 00-.459.19L3.753 7.411a.76.76 0 00-.26.521.76.76 0 00.184.552.76.76 0 00.521.26.76.76 0 00.552-.185l3.798-3.292a.76.76 0 00.213-.863.76.76 0 00-.751-.475zm7.573 0a.76.76 0 00-.667.523.76.76 0 00.231.815l3.798 3.292a.76.76 0 00.552.185.76.76 0 00.521-.26.76.76 0 00.184-.552.76.76 0 00-.26-.521l-3.798-3.292a.76.76 0 00-.562-.19zm-3.735 1.527c-3.907 0-7.09 3.183-7.09 7.09s3.183 7.09 7.09 7.09 7.09-3.183 7.09-7.09-3.183-7.09-7.09-7.09zm0 1.519a5.56 5.56 0 015.571 5.571 5.56 5.56 0 01-5.571 5.571 5.56 5.56 0 01-5.571-5.571 5.56 5.56 0 015.571-5.571zm0 1.013a.76.76 0 00-.76.76v3.798a.76.76 0 00.222.538l2.326 2.326a.76.76 0 101.076-1.076l-2.105-2.105V8.748a.76.76 0 00-.76-.76z"
              ></path>
            </svg>

            <p
              className={`${
                appActiveState.timer ? "text-primary" : "text-zinc-400"
              } text-xs`}
            >
              Timer
            </p>
          </div>
          <div
            className="relative flex w-full cursor-pointer flex-col items-center rounded-md  py-1  transition duration-150 ease-in-out hover:bg-zinc-200/20"
            onClick={() =>
              setAppActiveState({
                ...appActiveState,
                media: !appActiveState.media,
              })
            }
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 27 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.0935 16.803H9.54287C9.36147 16.0732 8.70334 15.5332 7.92287 15.5332C7.13818 15.5332 6.48428 16.0732 6.29865 16.803H4.69975C4.47193 16.803 4.29053 16.9845 4.29053 17.2123C4.29053 17.4359 4.47193 17.6215 4.69975 17.6215H6.29865C6.48006 18.3471 7.13818 18.8913 7.92287 18.8913C8.70756 18.8913 9.36147 18.3471 9.54287 17.6215H23.0935C23.3171 17.6215 23.5027 17.4359 23.5027 17.2123C23.5027 16.9887 23.3171 16.803 23.0935 16.803ZM7.92287 18.0771C7.44615 18.0771 7.06225 17.6932 7.05803 17.2165V17.208C7.06225 16.7355 7.44615 16.3516 7.92287 16.3516C8.39537 16.3516 8.7835 16.7355 8.7835 17.2123C8.7835 17.6848 8.39537 18.0771 7.92287 18.0771Z"
                fill={`${appActiveState.media ? "#F7A928" : "#a9a9a9"}`}
              />
              <path
                d="M26.5908 0.336914H0.409219C0.185625 0.336914 0 0.51832 0 0.746133V20.2579C0 20.4814 0.185625 20.6671 0.409219 20.6671H26.5908C26.8186 20.6671 27 20.4814 27 20.2579V0.746133C27 0.51832 26.8186 0.336914 26.5908 0.336914ZM26.1816 19.8444H0.818438V1.15535H26.1816V19.8444Z"
                fill={`${appActiveState.media ? "#F7A928" : "#a9a9a9"}`}
              />
              <path
                d="M8.78333 17.2164C8.78333 17.6889 8.39521 18.077 7.92271 18.077C7.44599 18.077 7.06208 17.6931 7.05786 17.2164V17.208C7.06208 16.7355 7.44599 16.3516 7.92271 16.3516C8.39521 16.3558 8.78333 16.7355 8.78333 17.2164Z"
                fill="#F7A928"
              />
              <path
                d="M17.3517 8.76637L12.4748 5.95246C12.3483 5.87652 12.1922 5.87652 12.0656 5.95246C11.939 6.02418 11.8589 6.15918 11.8589 6.30684V11.9346C11.8589 12.0823 11.939 12.2173 12.0656 12.289C12.1289 12.327 12.2006 12.3439 12.2681 12.3439C12.3398 12.3439 12.4115 12.327 12.4748 12.289L17.3517 9.47512C17.4783 9.4034 17.5542 9.2684 17.5542 9.12074C17.5542 8.97309 17.4783 8.83809 17.3517 8.76637ZM12.6773 11.2217V7.01137L16.3265 9.11652L12.6773 11.2217Z"
                fill={`${appActiveState.media ? "#F7A928" : "#a9a9a9"}`}
              />
              <path
                d="M13.8966 3.55176C10.8254 3.55176 8.32788 6.04926 8.32788 9.11629C8.32788 12.1833 10.8254 14.6808 13.8966 14.6808C16.9637 14.6808 19.4612 12.1833 19.4612 9.11629C19.4612 6.04926 16.9637 3.55176 13.8966 3.55176ZM13.8966 13.8624C11.2768 13.8624 9.14632 11.7319 9.14632 9.11629C9.14632 6.49645 11.2768 4.3702 13.8966 4.3702C16.5123 4.3702 18.6427 6.49645 18.6427 9.11629C18.6427 11.7319 16.5123 13.8624 13.8966 13.8624Z"
                fill={`${appActiveState.media ? "#F7A928" : "#a9a9a9"}`}
              />
            </svg>

            <p
              className={`${
                appActiveState.media ? "text-primary" : "text-zinc-400"
              } text-xs`}
            >
              Media
            </p>
          </div>
          <div
            className="relative flex w-full cursor-pointer flex-col items-center rounded-md  py-1  transition duration-150 ease-in-out hover:bg-zinc-200/20"
            onClick={() =>
              setAppActiveState({
                ...appActiveState,
                files: !appActiveState.files,
              })
            }
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 23 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.8656 4.21875H20.0218V1.89844C20.0218 0.84375 19.1781 0 18.1234 0H2.2187C1.16401 0 0.278076 0.84375 0.278076 1.89844V22.5703C0.278076 23.625 1.12183 24.4688 2.17651 24.4688H3.99058V25.2281C3.99058 26.1984 4.79214 27 5.80464 27H20.8234C21.8359 27 22.6796 26.1984 22.6796 25.2281V5.99062C22.7218 5.02031 21.8781 4.21875 20.8656 4.21875ZM2.2187 23.625C1.62808 23.625 1.12183 23.1609 1.12183 22.5703V1.89844C1.12183 1.30781 1.62808 0.84375 2.2187 0.84375H18.1234C18.714 0.84375 19.2203 1.30781 19.2203 1.89844V22.5703C19.2203 23.1609 18.714 23.625 18.1234 23.625H2.2187ZM21.8781 25.2281C21.8781 25.7766 21.414 26.1984 20.8656 26.1984H5.84683C5.29839 26.1984 4.83433 25.7766 4.83433 25.2281V24.4688H18.1234C19.1781 24.4688 20.0218 23.625 20.0218 22.5703V5.02031H20.8656C21.414 5.02031 21.8781 5.44219 21.8781 5.99062V25.2281Z"
                fill={`${appActiveState.files ? "#F7A928" : "#a9a9a9"}`}
              />
              <path
                d="M21.8782 5.99082V25.2283C21.8782 25.7768 21.4142 26.1986 20.8657 26.1986H5.84697C5.29854 26.1986 4.83447 25.7768 4.83447 25.2283V24.4689H18.1235C19.1782 24.4689 20.022 23.6252 20.022 22.5705V5.02051H20.8657C21.4142 5.02051 21.8782 5.44238 21.8782 5.99082Z"
                fill="#27272A"
              />
              <path
                d="M18.1234 0.801758H2.2187C1.62808 0.801758 1.12183 1.26582 1.12183 1.85645V22.5283C1.12183 23.1189 1.62808 23.583 2.2187 23.583H18.1234C18.714 23.583 19.2203 23.1189 19.2203 22.5283V1.85645C19.2203 1.30801 18.714 0.801758 18.1234 0.801758ZM3.77964 3.7127H10.6562C10.8671 3.7127 11.0781 3.88145 11.0781 4.13457C11.0781 4.34551 10.9093 4.55645 10.6562 4.55645H3.77964C3.5687 4.55645 3.35776 4.3877 3.35776 4.13457C3.35776 3.92363 3.5687 3.7127 3.77964 3.7127ZM10.15 20.5033H3.77964C3.5687 20.5033 3.35776 20.3346 3.35776 20.0814C3.35776 19.8705 3.52651 19.6596 3.77964 19.6596H10.15C10.3609 19.6596 10.5718 19.8283 10.5718 20.0814C10.5718 20.3346 10.4031 20.5033 10.15 20.5033ZM10.15 17.2971H3.77964C3.5687 17.2971 3.35776 17.1283 3.35776 16.8752C3.35776 16.6643 3.52651 16.4533 3.77964 16.4533H10.15C10.3609 16.4533 10.5718 16.6221 10.5718 16.8752C10.5718 17.1283 10.4031 17.2971 10.15 17.2971ZM16.9421 20.3346C16.9421 20.5455 16.7734 20.7564 16.5203 20.7564H12.8921C12.6812 20.7564 12.4703 20.5877 12.4703 20.3346V16.7064C12.4703 16.4955 12.639 16.2846 12.8921 16.2846H16.5625C16.7734 16.2846 16.9843 16.4533 16.9843 16.7064V20.3346H16.9421ZM16.5625 14.133H3.77964C3.5687 14.133 3.35776 13.9643 3.35776 13.7111C3.35776 13.5002 3.52651 13.2893 3.77964 13.2893H16.5625C16.7734 13.2893 16.9843 13.458 16.9843 13.7111C16.9421 13.9221 16.7734 14.133 16.5625 14.133ZM16.5625 10.9268H3.77964C3.5687 10.9268 3.35776 10.758 3.35776 10.5049C3.35776 10.2939 3.52651 10.083 3.77964 10.083H16.5625C16.7734 10.083 16.9843 10.2518 16.9843 10.5049C16.9421 10.758 16.7734 10.9268 16.5625 10.9268ZM16.5625 7.72051H3.77964C3.5687 7.72051 3.35776 7.55176 3.35776 7.29863C3.35776 7.0877 3.52651 6.87676 3.77964 6.87676H16.5625C16.7734 6.87676 16.9843 7.04551 16.9843 7.29863C16.9421 7.55176 16.7734 7.72051 16.5625 7.72051Z"
                fill="#27272A"
              />
              <path
                d="M11.0782 4.13477C11.0782 4.3457 10.9095 4.55664 10.6563 4.55664H3.77979C3.56885 4.55664 3.35791 4.38789 3.35791 4.13477C3.35791 3.92383 3.52666 3.71289 3.77979 3.71289H10.6563C10.8673 3.71289 11.0782 3.92383 11.0782 4.13477ZM16.9423 7.34102C16.9423 7.55195 16.7735 7.76289 16.5204 7.76289H3.77979C3.56885 7.76289 3.35791 7.59414 3.35791 7.34102C3.35791 7.13008 3.52666 6.91914 3.77979 6.91914H16.5626C16.7735 6.91914 16.9423 7.08789 16.9423 7.34102ZM16.9423 10.5051C16.9423 10.716 16.7735 10.927 16.5204 10.927H3.77979C3.56885 10.927 3.35791 10.7582 3.35791 10.5051C3.35791 10.2941 3.52666 10.0832 3.77979 10.0832H16.5626C16.7735 10.1254 16.9423 10.2941 16.9423 10.5051ZM16.9423 13.7113C16.9423 13.9223 16.7735 14.1332 16.5204 14.1332H3.77979C3.56885 14.1332 3.35791 13.9645 3.35791 13.7113C3.35791 13.5004 3.52666 13.2895 3.77979 13.2895H16.5626C16.7735 13.2895 16.9423 13.5004 16.9423 13.7113ZM16.5626 16.2848H12.9345C12.7235 16.2848 12.5126 16.4535 12.5126 16.7066V20.3348C12.5126 20.5457 12.6813 20.7566 12.9345 20.7566H16.5626C16.7735 20.7566 16.9845 20.5879 16.9845 20.3348V16.7066C16.9423 16.4535 16.7735 16.2848 16.5626 16.2848ZM16.1407 19.9129H13.3563V17.1285H16.1407V19.9129Z"
                fill={`${appActiveState.files ? "#F7A928" : "#a9a9a9"}`}
              />
              <path
                d="M13.3562 17.0859H16.1406V19.8703H13.3562V17.0859Z"
                fill="#F7A928"
              />
              <path
                d="M13.3562 17.0859V19.8703H16.1406V17.0859H13.3562ZM15.7187 19.4906H13.7781V17.55H15.7187V19.4906Z"
                fill="#F7A928"
              />
              <path
                d="M10.572 16.917C10.572 17.1279 10.4032 17.3389 10.1501 17.3389H3.77979C3.56885 17.3389 3.35791 17.1701 3.35791 16.917C3.35791 16.7061 3.52666 16.4951 3.77979 16.4951H10.1501C10.4032 16.4951 10.572 16.6639 10.572 16.917ZM10.572 20.1232C10.572 20.3342 10.4032 20.5451 10.1501 20.5451H3.77979C3.56885 20.5451 3.35791 20.3764 3.35791 20.1232C3.35791 19.9123 3.52666 19.7014 3.77979 19.7014H10.1501C10.4032 19.7014 10.572 19.8701 10.572 20.1232Z"
                fill={`${appActiveState.files ? "#F7A928" : "#a9a9a9"}`}
              />
            </svg>

            <p
              className={`${
                appActiveState.files ? "text-primary" : "text-zinc-400"
              } text-xs`}
            >
              Files
            </p>
          </div>
          <div
            className="relative flex w-full cursor-pointer flex-col items-center rounded-md  py-1  transition duration-150 ease-in-out hover:bg-zinc-200/20"
            onClick={() =>
              setAppActiveState({
                ...appActiveState,
                todo: !appActiveState.todo,
              })
            }
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 27 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.76 0.540039H3.24004C1.75126 0.540039 0.540039 1.75126 0.540039 3.24004V23.76C0.540039 25.2488 1.75126 26.46 3.24004 26.46H23.76C25.2488 26.46 26.46 25.2488 26.46 23.76V3.24004C26.46 1.75126 25.2488 0.540039 23.76 0.540039ZM25.38 23.76C25.38 24.6532 24.6532 25.38 23.76 25.38H3.24004C2.34688 25.38 1.62004 24.6532 1.62004 23.76V3.24004C1.62004 2.34688 2.34688 1.62004 3.24004 1.62004H23.76C24.6532 1.62004 25.38 2.34688 25.38 3.24004V23.76Z"
                fill={`${appActiveState.todo ? "#F7A928" : "#a9a9a9"}`}
              />
              <path
                d="M8.64005 19.2169L5.24183 15.8186L4.47827 16.5822L8.64005 20.744L22.5218 6.86219L21.7583 6.09863L8.64005 19.2169Z"
                fill={`${appActiveState.todo ? "#F7A928" : "#a9a9a9"}`}
              />
            </svg>

            <p
              className={`${
                appActiveState.todo ? "text-primary" : "text-zinc-400"
              } text-xs`}
            >
              Todo
            </p>
          </div>
          <div
            className="relative flex w-full cursor-pointer flex-col items-center rounded-md  py-1  transition duration-150 ease-in-out hover:bg-zinc-200/20"
            onClick={() =>
              setAppActiveState({
                ...appActiveState,
                notes: !appActiveState.notes,
              })
            }
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 27 37"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24.8684 2.84211H22.7368V0.710526C22.7368 0.522083 22.662 0.341358 22.5287 0.208108C22.3955 0.0748589 22.2148 0 22.0263 0C21.8379 0 21.6571 0.0748589 21.5239 0.208108C21.3906 0.341358 21.3158 0.522083 21.3158 0.710526V2.84211H18.4737V0.710526C18.4737 0.522083 18.3988 0.341358 18.2656 0.208108C18.1323 0.0748589 17.9516 0 17.7632 0C17.5747 0 17.394 0.0748589 17.2607 0.208108C17.1275 0.341358 17.0526 0.522083 17.0526 0.710526V2.84211H14.2105V0.710526C14.2105 0.522083 14.1357 0.341358 14.0024 0.208108C13.8692 0.0748589 13.6884 0 13.5 0C13.3116 0 13.1308 0.0748589 12.9976 0.208108C12.8643 0.341358 12.7895 0.522083 12.7895 0.710526V2.84211H9.94737V0.710526C9.94737 0.522083 9.87251 0.341358 9.73926 0.208108C9.60601 0.0748589 9.42529 0 9.23684 0C9.0484 0 8.86767 0.0748589 8.73442 0.208108C8.60117 0.341358 8.52632 0.522083 8.52632 0.710526V2.84211H5.68421V0.710526C5.68421 0.522083 5.60935 0.341358 5.4761 0.208108C5.34285 0.0748589 5.16213 0 4.97368 0C4.78524 0 4.60452 0.0748589 4.47127 0.208108C4.33802 0.341358 4.26316 0.522083 4.26316 0.710526V2.84211H2.13158C0.959211 2.84211 0 3.79847 0 4.97368V34.8158C0 35.991 0.957789 36.9474 2.13158 36.9474H24.8684C26.0451 36.9474 27 35.991 27 34.8158V4.97368C27 3.79847 26.0451 2.84211 24.8684 2.84211ZM2.13158 4.26316H4.26316V4.97368C4.26316 5.16213 4.33802 5.34285 4.47127 5.4761C4.60452 5.60935 4.78524 5.68421 4.97368 5.68421C5.16213 5.68421 5.34285 5.60935 5.4761 5.4761C5.60935 5.34285 5.68421 5.16213 5.68421 4.97368V4.26316H8.52632V4.97368C8.52632 5.16213 8.60117 5.34285 8.73442 5.4761C8.86767 5.60935 9.0484 5.68421 9.23684 5.68421C9.42529 5.68421 9.60601 5.60935 9.73926 5.4761C9.87251 5.34285 9.94737 5.16213 9.94737 4.97368V4.26316H12.7895V4.97368C12.7895 5.16213 12.8643 5.34285 12.9976 5.4761C13.1308 5.60935 13.3116 5.68421 13.5 5.68421C13.6884 5.68421 13.8692 5.60935 14.0024 5.4761C14.1357 5.34285 14.2105 5.16213 14.2105 4.97368V4.26316H17.0526V4.97368C17.0526 5.16213 17.1275 5.34285 17.2607 5.4761C17.394 5.60935 17.5747 5.68421 17.7632 5.68421C17.9516 5.68421 18.1323 5.60935 18.2656 5.4761C18.3988 5.34285 18.4737 5.16213 18.4737 4.97368V4.26316H21.3158V4.97368C21.3158 5.16213 21.3906 5.34285 21.5239 5.4761C21.6571 5.60935 21.8379 5.68421 22.0263 5.68421C22.2148 5.68421 22.3955 5.60935 22.5287 5.4761C22.662 5.34285 22.7368 5.16213 22.7368 4.97368V4.26316H24.8684C25.0569 4.26316 25.2376 4.33802 25.3708 4.47127C25.5041 4.60452 25.5789 4.78524 25.5789 4.97368V7.01716H1.42105V4.97368C1.42105 4.78524 1.49591 4.60452 1.62916 4.47127C1.76241 4.33802 1.94314 4.26316 2.13158 4.26316ZM24.8684 35.5263H2.13158C1.94314 35.5263 1.76241 35.4515 1.62916 35.3182C1.49591 35.185 1.42105 35.0042 1.42105 34.8158V8.43821H25.5789V34.8158C25.5789 35.0042 25.5041 35.185 25.3708 35.3182C25.2376 35.4515 25.0569 35.5263 24.8684 35.5263Z"
                fill={`${appActiveState.notes ? "#F7A928" : "#a9a9a9"}`}
              />
              <path
                d="M19.1828 11.3643H7.81435C7.62591 11.3643 7.44518 11.4391 7.31193 11.5724C7.17868 11.7056 7.10382 11.8863 7.10382 12.0748C7.10382 12.2632 7.17868 12.444 7.31193 12.5772C7.44518 12.7105 7.62591 12.7853 7.81435 12.7853H19.1828C19.3712 12.7853 19.5519 12.7105 19.6852 12.5772C19.8184 12.444 19.8933 12.2632 19.8933 12.0748C19.8933 11.8863 19.8184 11.7056 19.6852 11.5724C19.5519 11.4391 19.3712 11.3643 19.1828 11.3643ZM4.97225 17.0044H7.81435C8.00279 17.0044 8.18352 16.9296 8.31677 16.7963C8.45002 16.6631 8.52488 16.4823 8.52488 16.2939C8.52488 16.1054 8.45002 15.9247 8.31677 15.7915C8.18352 15.6582 8.00279 15.5834 7.81435 15.5834H4.97225C4.7838 15.5834 4.60308 15.6582 4.46983 15.7915C4.33658 15.9247 4.26172 16.1054 4.26172 16.2939C4.26172 16.4823 4.33658 16.6631 4.46983 16.7963C4.60308 16.9296 4.7838 17.0044 4.97225 17.0044ZM14.9196 18.4255H4.97225C4.7838 18.4255 4.60308 18.5003 4.46983 18.6336C4.33658 18.7668 4.26172 18.9476 4.26172 19.136C4.26172 19.3244 4.33658 19.5052 4.46983 19.6384C4.60308 19.7717 4.7838 19.8465 4.97225 19.8465H14.9196C15.1081 19.8465 15.2888 19.7717 15.422 19.6384C15.5553 19.5052 15.6301 19.3244 15.6301 19.136C15.6301 18.9476 15.5553 18.7668 15.422 18.6336C15.2888 18.5003 15.1081 18.4255 14.9196 18.4255ZM4.97225 22.6886H9.2354C9.42385 22.6886 9.60457 22.6138 9.73782 22.4805C9.87107 22.3473 9.94593 22.1665 9.94593 21.9781C9.94593 21.7897 9.87107 21.6089 9.73782 21.4757C9.60457 21.3424 9.42385 21.2676 9.2354 21.2676H4.97225C4.7838 21.2676 4.60308 21.3424 4.46983 21.4757C4.33658 21.6089 4.26172 21.7897 4.26172 21.9781C4.26172 22.1665 4.33658 22.3473 4.46983 22.4805C4.60308 22.6138 4.7838 22.6886 4.97225 22.6886ZM14.9196 24.1097H4.97225C4.7838 24.1097 4.60308 24.1845 4.46983 24.3178C4.33658 24.451 4.26172 24.6318 4.26172 24.8202C4.26172 25.0086 4.33658 25.1894 4.46983 25.3226C4.60308 25.4559 4.7838 25.5307 4.97225 25.5307H14.9196C15.1081 25.5307 15.2888 25.4559 15.422 25.3226C15.5553 25.1894 15.6301 25.0086 15.6301 24.8202C15.6301 24.6318 15.5553 24.451 15.422 24.3178C15.2888 24.1845 15.1081 24.1097 14.9196 24.1097Z"
                fill={`${appActiveState.notes ? "#F7A928" : "#a9a9a9"}`}
              />
            </svg>

            <p
              className={`${
                appActiveState.notes ? "text-primary" : "text-zinc-400"
              } text-xs`}
            >
              Notes
            </p>
          </div>
          <div
            className="relative flex  w-full cursor-pointer flex-col items-center rounded-md  py-1  transition duration-150 ease-in-out hover:bg-zinc-200/20"
            onClick={() =>
              setAppActiveState({
                ...appActiveState,
                calender: !appActiveState.calender,
              })
            }
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 25 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.9642 3.26484V0.796875C12.9642 0.564844 12.7743 0.375 12.5423 0.375C12.3103 0.375 12.1204 0.564844 12.1204 0.796875V3.26484C11.7829 3.43359 11.5298 3.77109 11.5298 4.17188C11.5298 4.72031 11.9728 5.18437 12.5423 5.18437C13.1118 5.18437 13.5548 4.72031 13.5548 4.17188C13.5548 3.77109 13.3228 3.4125 12.9642 3.26484ZM19.2923 3.26484V0.796875C19.2923 0.564844 19.1024 0.375 18.8704 0.375C18.6384 0.375 18.4485 0.564844 18.4485 0.796875V3.26484C18.111 3.43359 17.8579 3.77109 17.8579 4.17188C17.8579 4.72031 18.3009 5.18437 18.8704 5.18437C19.4399 5.18437 19.8829 4.72031 19.8829 4.17188C19.8829 3.77109 19.6509 3.4125 19.2923 3.26484ZM7.05791 1.85156H11.6985V2.69531H7.05791V1.85156ZM13.386 1.85156H18.0267V2.69531H13.386V1.85156ZM6.63604 3.26484V0.796875C6.63604 0.564844 6.44619 0.375 6.21416 0.375C5.98213 0.375 5.79229 0.564844 5.79229 0.796875V3.26484C5.45479 3.43359 5.20166 3.77109 5.20166 4.17188C5.20166 4.72031 5.64463 5.18437 6.21416 5.18437C6.78369 5.18437 7.22666 4.72031 7.22666 4.17188C7.22666 3.77109 6.99463 3.4125 6.63604 3.26484Z"
                fill={`${appActiveState.calender ? "#F7A928" : "#a9a9a9"}`}
              />
              <path
                d="M22.4141 1.85156H19.6719V2.69531H22.4141C23.1102 2.69531 23.6797 3.26484 23.6797 3.96094V6.28125H1.32031V3.96094C1.32031 3.26484 1.88984 2.69531 2.58594 2.69531H5.32812V1.85156H2.58594C1.42578 1.85156 0.476562 2.80078 0.476562 3.96094V17.8828C0.476562 19.043 1.42578 19.9922 2.58594 19.9922H22.4141C23.5742 19.9922 24.5234 19.043 24.5234 17.8828V3.96094C24.5234 2.80078 23.5742 1.85156 22.4141 1.85156ZM22.4141 19.1484H2.58594C1.88984 19.1484 1.32031 18.5789 1.32031 17.8828V7.125H23.6797V17.8828C23.6797 18.5789 23.1102 19.1484 22.4141 19.1484Z"
                fill={`${appActiveState.calender ? "#F7A928" : "#a9a9a9"}`}
              />
              <path
                d="M9.75786 10.3521C10.1423 10.3521 10.454 10.0405 10.454 9.65605C10.454 9.27161 10.1423 8.95996 9.75786 8.95996C9.37342 8.95996 9.06177 9.27161 9.06177 9.65605C9.06177 10.0405 9.37342 10.3521 9.75786 10.3521Z"
                fill={`${appActiveState.calender ? "#F7A928" : "#a9a9a9"}`}
              />
              <path
                d="M7.18437 10.3521C7.56882 10.3521 7.88047 10.0405 7.88047 9.65605C7.88047 9.27161 7.56882 8.95996 7.18437 8.95996C6.79993 8.95996 6.48828 9.27161 6.48828 9.65605C6.48828 10.0405 6.79993 10.3521 7.18437 10.3521Z"
                fill={`${appActiveState.calender ? "#F7A928" : "#a9a9a9"}`}
              />
              <path
                d="M20.0516 10.3521C20.436 10.3521 20.7477 10.0405 20.7477 9.65605C20.7477 9.27161 20.436 8.95996 20.0516 8.95996C19.6671 8.95996 19.3555 9.27161 19.3555 9.65605C19.3555 10.0405 19.6671 10.3521 20.0516 10.3521Z"
                fill={`${appActiveState.calender ? "#F7A928" : "#a9a9a9"}`}
              />
              <path
                d="M4.61089 12.6939C4.99533 12.6939 5.30698 12.3823 5.30698 11.9979C5.30698 11.6134 4.99533 11.3018 4.61089 11.3018C4.22645 11.3018 3.91479 11.6134 3.91479 11.9979C3.91479 12.3823 4.22645 12.6939 4.61089 12.6939Z"
                fill={`${appActiveState.calender ? "#F7A928" : "#a9a9a9"}`}
              />
              <path
                d="M7.18437 12.6939C7.56882 12.6939 7.88047 12.3823 7.88047 11.9979C7.88047 11.6134 7.56882 11.3018 7.18437 11.3018C6.79993 11.3018 6.48828 11.6134 6.48828 11.9979C6.48828 12.3823 6.79993 12.6939 7.18437 12.6939Z"
                fill={`${appActiveState.calender ? "#F7A928" : "#a9a9a9"}`}
              />
              <path
                d="M9.75786 12.6939C10.1423 12.6939 10.454 12.3823 10.454 11.9979C10.454 11.6134 10.1423 11.3018 9.75786 11.3018C9.37342 11.3018 9.06177 11.6134 9.06177 11.9979C9.06177 12.3823 9.37342 12.6939 9.75786 12.6939Z"
                fill={`${appActiveState.calender ? "#F7A928" : "#a9a9a9"}`}
              />
              <path
                d="M12.3313 12.6939C12.7158 12.6939 13.0274 12.3823 13.0274 11.9979C13.0274 11.6134 12.7158 11.3018 12.3313 11.3018C11.9469 11.3018 11.6353 11.6134 11.6353 11.9979C11.6353 12.3823 11.9469 12.6939 12.3313 12.6939Z"
                fill={`${appActiveState.calender ? "#F7A928" : "#a9a9a9"}`}
              />
              <path
                d="M14.9046 12.6939C15.289 12.6939 15.6007 12.3823 15.6007 11.9979C15.6007 11.6134 15.289 11.3018 14.9046 11.3018C14.5201 11.3018 14.2085 11.6134 14.2085 11.9979C14.2085 12.3823 14.5201 12.6939 14.9046 12.6939Z"
                fill={`${appActiveState.calender ? "#F7A928" : "#a9a9a9"}`}
              />
              <path
                d="M17.4571 12.6939C17.8415 12.6939 18.1532 12.3823 18.1532 11.9979C18.1532 11.6134 17.8415 11.3018 17.4571 11.3018C17.0726 11.3018 16.761 11.6134 16.761 11.9979C16.761 12.3823 17.0726 12.6939 17.4571 12.6939Z"
                fill={`${appActiveState.calender ? "#F7A928" : "#a9a9a9"}`}
              />
              <path
                d="M7.18437 15.0562C7.56882 15.0562 7.88047 14.7446 7.88047 14.3602C7.88047 13.9757 7.56882 13.6641 7.18437 13.6641C6.79993 13.6641 6.48828 13.9757 6.48828 14.3602C6.48828 14.7446 6.79993 15.0562 7.18437 15.0562Z"
                fill={`${appActiveState.calender ? "#F7A928" : "#a9a9a9"}`}
              />
              <path
                d="M9.75786 15.0562C10.1423 15.0562 10.454 14.7446 10.454 14.3602C10.454 13.9757 10.1423 13.6641 9.75786 13.6641C9.37342 13.6641 9.06177 13.9757 9.06177 14.3602C9.06177 14.7446 9.37342 15.0562 9.75786 15.0562Z"
                fill={`${appActiveState.calender ? "#F7A928" : "#a9a9a9"}`}
              />
              <path
                d="M12.3313 15.0562C12.7158 15.0562 13.0274 14.7446 13.0274 14.3602C13.0274 13.9757 12.7158 13.6641 12.3313 13.6641C11.9469 13.6641 11.6353 13.9757 11.6353 14.3602C11.6353 14.7446 11.9469 15.0562 12.3313 15.0562Z"
                fill={`${appActiveState.calender ? "#F7A928" : "#a9a9a9"}`}
              />
              <path
                d="M14.9046 15.0562C15.289 15.0562 15.6007 14.7446 15.6007 14.3602C15.6007 13.9757 15.289 13.6641 14.9046 13.6641C14.5201 13.6641 14.2085 13.9757 14.2085 14.3602C14.2085 14.7446 14.5201 15.0562 14.9046 15.0562Z"
                fill={`${appActiveState.calender ? "#F7A928" : "#a9a9a9"}`}
              />
              <path
                d="M17.4571 15.0562C17.8415 15.0562 18.1532 14.7446 18.1532 14.3602C18.1532 13.9757 17.8415 13.6641 17.4571 13.6641C17.0726 13.6641 16.761 13.9757 16.761 14.3602C16.761 14.7446 17.0726 15.0562 17.4571 15.0562Z"
                fill={`${appActiveState.calender ? "#F7A928" : "#a9a9a9"}`}
              />
              <path
                d="M12.3313 10.4156C12.7158 10.4156 13.0274 10.104 13.0274 9.71953C13.0274 9.33509 12.7158 9.02344 12.3313 9.02344C11.9469 9.02344 11.6353 9.33509 11.6353 9.71953C11.6353 10.104 11.9469 10.4156 12.3313 10.4156Z"
                fill={`${appActiveState.calender ? "#F7A928" : "#a9a9a9"}`}
              />
              <path
                d="M14.9046 10.4156C15.289 10.4156 15.6007 10.104 15.6007 9.71953C15.6007 9.33509 15.289 9.02344 14.9046 9.02344C14.5201 9.02344 14.2085 9.33509 14.2085 9.71953C14.2085 10.104 14.5201 10.4156 14.9046 10.4156Z"
                fill={`${appActiveState.calender ? "#F7A928" : "#a9a9a9"}`}
              />
              <path
                d="M17.4571 10.4156C17.8415 10.4156 18.1532 10.104 18.1532 9.71953C18.1532 9.33509 17.8415 9.02344 17.4571 9.02344C17.0726 9.02344 16.761 9.33509 16.761 9.71953C16.761 10.104 17.0726 10.4156 17.4571 10.4156Z"
                fill={`${appActiveState.calender ? "#F7A928" : "#a9a9a9"}`}
              />
              <path
                d="M20.0306 12.6939C20.415 12.6939 20.7267 12.3823 20.7267 11.9979C20.7267 11.6134 20.415 11.3018 20.0306 11.3018C19.6461 11.3018 19.3345 11.6134 19.3345 11.9979C19.3345 12.3823 19.6461 12.6939 20.0306 12.6939Z"
                fill={`${appActiveState.calender ? "#F7A928" : "#a9a9a9"}`}
              />
              <path
                d="M20.0516 15.0562C20.436 15.0562 20.7477 14.7446 20.7477 14.3602C20.7477 13.9757 20.436 13.6641 20.0516 13.6641C19.6671 13.6641 19.3555 13.9757 19.3555 14.3602C19.3555 14.7446 19.6671 15.0562 20.0516 15.0562Z"
                fill={`${appActiveState.calender ? "#F7A928" : "#a9a9a9"}`}
              />
              <path
                d="M4.61089 14.9723C4.99533 14.9723 5.30698 14.6606 5.30698 14.2762C5.30698 13.8917 4.99533 13.5801 4.61089 13.5801C4.22645 13.5801 3.91479 13.8917 3.91479 14.2762C3.91479 14.6606 4.22645 14.9723 4.61089 14.9723Z"
                fill={`${appActiveState.calender ? "#F7A928" : "#a9a9a9"}`}
              />
              <path
                d="M4.61089 17.2711C4.99533 17.2711 5.30698 16.9594 5.30698 16.575C5.30698 16.1906 4.99533 15.8789 4.61089 15.8789C4.22645 15.8789 3.91479 16.1906 3.91479 16.575C3.91479 16.9594 4.22645 17.2711 4.61089 17.2711Z"
                fill={`${appActiveState.calender ? "#F7A928" : "#a9a9a9"}`}
              />
              <path
                d="M7.18437 17.2711C7.56882 17.2711 7.88047 16.9594 7.88047 16.575C7.88047 16.1906 7.56882 15.8789 7.18437 15.8789C6.79993 15.8789 6.48828 16.1906 6.48828 16.575C6.48828 16.9594 6.79993 17.2711 7.18437 17.2711Z"
                fill={`${appActiveState.calender ? "#F7A928" : "#a9a9a9"}`}
              />
              <path
                d="M9.75786 17.2711C10.1423 17.2711 10.454 16.9594 10.454 16.575C10.454 16.1906 10.1423 15.8789 9.75786 15.8789C9.37342 15.8789 9.06177 16.1906 9.06177 16.575C9.06177 16.9594 9.37342 17.2711 9.75786 17.2711Z"
                fill={`${appActiveState.calender ? "#F7A928" : "#a9a9a9"}`}
              />
              <path
                d="M12.3313 17.2711C12.7158 17.2711 13.0274 16.9594 13.0274 16.575C13.0274 16.1906 12.7158 15.8789 12.3313 15.8789C11.9469 15.8789 11.6353 16.1906 11.6353 16.575C11.6353 16.9594 11.9469 17.2711 12.3313 17.2711Z"
                fill={`${appActiveState.calender ? "#F7A928" : "#a9a9a9"}`}
              />
            </svg>

            <p
              className={`${
                appActiveState.calender ? "text-primary" : "text-zinc-400"
              } text-xs`}
            >
              Calendar
            </p>
          </div>
        </div>
        <div
          onClick={openFeedbackModal}
          className="flex  w-full  cursor-pointer items-center justify-center rounded-md py-2 transition duration-150 ease-in-out hover:bg-zinc-200/20"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 0C12.8355 0 9.74207 0.938384 7.11088 2.69649C4.4797 4.45459 2.42894 6.95345 1.21793 9.87706C0.0069325 12.8007 -0.309921 16.0177 0.307443 19.1214C0.924806 22.2251 2.44866 25.0761 4.6863 27.3137C6.92394 29.5513 9.77487 31.0752 12.8786 31.6926C15.9823 32.3099 19.1993 31.9931 22.1229 30.7821C25.0466 29.5711 27.5454 27.5203 29.3035 24.8891C31.0616 22.2579 32 19.1645 32 16C31.995 11.7581 30.3077 7.69134 27.3082 4.69185C24.3087 1.69235 20.2419 0.00502833 16 0ZM16 30C13.2311 30 10.5243 29.1789 8.22202 27.6406C5.91974 26.1022 4.12532 23.9157 3.06569 21.3576C2.00607 18.7994 1.72882 15.9845 2.26901 13.2687C2.80921 10.553 4.14258 8.05844 6.10051 6.1005C8.05845 4.14257 10.553 2.8092 13.2687 2.26901C15.9845 1.72881 18.7994 2.00606 21.3576 3.06569C23.9157 4.12531 26.1022 5.91973 27.6406 8.22202C29.1789 10.5243 30 13.2311 30 16C29.996 19.7118 28.5198 23.2705 25.8951 25.8951C23.2705 28.5198 19.7118 29.996 16 30Z"
              fill="#A9A9A9"
            />
            <path
              d="M16 6C14.4092 6.00159 12.884 6.63424 11.7591 7.75911C10.6342 8.88399 10.0016 10.4092 10 12H12C12 10.9391 12.4214 9.92172 13.1716 9.17157C13.9217 8.42143 14.9391 8 16 8C16.9608 7.99906 17.8898 8.34396 18.6172 8.97164C19.3446 9.59932 19.8217 10.4678 19.9614 11.4184C20.1011 12.369 19.894 13.338 19.378 14.1485C18.8619 14.9589 18.0714 15.5565 17.151 15.832C16.5302 16.0126 15.9849 16.3899 15.597 16.9071C15.2091 17.4243 14.9996 18.0535 15 18.7V22H17V18.7C17.0019 18.4841 17.0736 18.2745 17.2045 18.1027C17.3354 17.931 17.5183 17.8062 17.726 17.747C19.1058 17.3331 20.2906 16.4366 21.064 15.2213C21.8374 14.006 22.1477 12.553 21.9383 11.1278C21.7289 9.70256 21.0137 8.40025 19.9234 7.45877C18.8331 6.5173 17.4405 5.99951 16 6Z"
              fill="#A9A9A9"
            />
            <path d="M17 24H15V26H17V24Z" fill="#A9A9A9" />
          </svg>
        </div>
      </div>
    </>
  );
}
