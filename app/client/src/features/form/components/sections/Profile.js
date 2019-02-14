/**
 * @flow
 */

import React from 'react'
import Section from './Section'
import LabeledInput from '../fragments/LabeledInput'

function Profile() {
  return (
    <Section heading="你的个人信息">
      <LabeledInput
        name="basics.name"
        label="Full Name"
        placeholder="Gang Wang"
      />
      <LabeledInput
        name="basics.email"
        label="Email"
        placeholder="gang.wang@gmail.com"
      />
      <LabeledInput
        name="basics.phone"
        label="Phone Number"
        placeholder="(666) 123-4567"
      />
      <LabeledInput
        name="basics.location.address"
        label="Location"
        placeholder="Irvine, CA"
      />
      <LabeledInput
        name="basics.website"
        label="Link"
        placeholder="mycoolportfolio.com/myname"
      />
    </Section>
  )
}

export default Profile
