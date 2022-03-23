import React, { Suspense, lazy, useState, useEffect } from 'react'

import './fcm'
import axios from 'axios'
import { EC2, fcmToken } from './ec2'
// import { instance } from "./axios";

function Fcmprac() {
  const bob = 'bog'
  function memberinfo() {
    axios
      .post(`${EC2}/member/info`)
      .then((res) => console.log('memberInfoRes:::', res))
      .catch((err) => console.log('memberInfoErr:::', err))
  }
  function pushnoti() {
    axios
      .post(`${EC2}/push`, {
        nickname: 'bog',
      })
      .then((res) => console.log('pushNotiRes:::', res))
      .catch((err) => console.log('pushNotiErr:::', err))
  }
  function ho() {
    axios
      .post(`${EC2}/ho`, {
        nickname: 'bog',
        token: fcmToken,
      })
      .then((res) => console.log('hoRes:::', res))
      .catch((err) => console.log('hoErr:::', err))
  }

  return (
    <div>
      <button
        type="button"
        style={{ padding: '20px', marginLeft: '20px' }}
        onClick={() => memberinfo()}
      >
        member/info
      </button>
      <button
        type="button"
        style={{ padding: '20px', marginLeft: '20px' }}
        onClick={() => pushnoti(bob)}
      >
        push/noti
      </button>
      <button
        type="button"
        style={{ padding: '20px', marginLeft: '20px' }}
        onClick={() => ho()}
      >
        ho
      </button>
    </div>
  )
}

export default Fcmprac
