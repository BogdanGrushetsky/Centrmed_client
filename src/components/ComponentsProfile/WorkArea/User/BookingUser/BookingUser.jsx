import React from 'react'
import { LayoutCabinet } from '../../../СommonСomponents/LayoutCabinet/LayoutCabinet'
import { TitlePages } from '../../../СommonСomponents/TitlePages/TitlePages'

function BookingUser(props) {
  return (
    <LayoutCabinet role="user" tabs={props.tabs} >
        <TitlePages>Заброньований час</TitlePages>
            {/* <Forma /> */}
    </LayoutCabinet>
  )
}

export default BookingUser