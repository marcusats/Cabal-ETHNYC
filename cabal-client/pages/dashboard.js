import React, { useState, useContext, useEffect } from "react";
import ProfileInfoButton from "../components/profileInfoButton";
import ProfilePicture from "../components/profilePicture";
import { Context } from "../providers/provider";

import ManageAccess from "../components/manageAccess";
import Cabal from "../sdk";
import { ethers } from "ethers";

export default function ProfilePage({}) {
  const { walletId } = useContext(Context);
  const [name, setName] = useState("");
  const [client, setClient] = useState(null);

  let informationCards = [
    {
      title: "Name",
      value: "",
      visible: false,
    },
    // {
    //   title: "Email",
    //   value: "bprobst1029@gmail.com",
    //   visible: false,
    // },
    // {
    //   title: "Birthday",
    //   value: null,
    //   visible: false,
    // },
    // {
    //   title: "SSN",
    //   value: "123-45-6789",
    //   visible: false,
    // },
    // {
    //   title: "Address",
    //   value: "1 Castle Point Terrace, Hoboken NJ 07030",
    //   visible: false,
    // },
    // { title: "Phone Number", value: "9-11", visible: false },
  ];
  useEffect(() => {
    if (client) {
      call();
    }
  }, [client]);

  async function call() {
    if (client) {
      console.log("got client!");
      console.log({ walletId });
      let res = await client.get(walletId);
      console.log({ res });
    }
  }

  async function init() {
    let prov = new ethers.providers.Web3Provider(window.ethereum);
    let s = prov.getSigner();
    console.log("init");
    console.log(s);
    console.log(prov);

    const c = await new Cabal(prov);
    setClient(c);
  }
  useEffect(() => {
    init();
  }, []);

  return (
    <div class="page profile">
      <div class="header">
        <ProfilePicture size={"lg"} />
        <span>
          <div class="top">
            <h4>{name}</h4>
          </div>
          <div class="bottom">
            <p>{walletId}</p>
          </div>
        </span>
      </div>
      <div class="content">
        <div class="buttons">
          {informationCards.map((item, idx) => {
            return <ProfileInfoButton item={item} key={item.title} idx={idx} />;
          })}
        </div>
      </div>
      <ManageAccess />
    </div>
  );
}
