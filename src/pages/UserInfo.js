import React from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'

function UserInfo() {
  console.log('ddd')
  async function manse() {
    await axios
      .get(`http://3.38.152.207:8080/health`, { withCredentials: true })
      .then((res) => console.log('백에서 보낸 요청 응답 : ', res))
  }

  return (
    <button type="button" onClick={() => manse()}>
      광훈님민우님만세
    </button>
  )
}

export default UserInfo
