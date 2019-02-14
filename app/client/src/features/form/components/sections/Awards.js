/**
 * @flow
 */

import React from 'react'
import { connect } from 'react-redux'
import Section from './Section'
import { Button, Divider } from '../../../../common/components'
import LabeledInput from '../fragments/LabeledInput'
import { Award } from '..'
import { addAward, removeAward } from '../../actions'
import type { FormValues } from '../../types'
import type { State } from '../../../../app/types'

type Props = {
  awards: $PropertyType<FormValues, 'awards'>,
  addAward: () => void,
  removeAward: () => void
}

function Awards({ awards, addAward, removeAward }: Props) {
  return (
    <Section heading="你的荣誉以及获奖经历">
      <LabeledInput
        name="headings.awards"
        label="本栏标题"
        placeholder="Awards"
      />
      <Divider />
      {awards.map((award, i) => <Award key={i} index={i} />)}
      <div className="section-buttons">
        <Button onClick={addAward} type="button">
          Add Award
        </Button>
        <Button
          onClick={removeAward}
          disabled={awards.length === 1}
          type="button"
        >
          Remove Award
        </Button>
      </div>
    </Section>
  )
}

function mapState(state: State) {
  return {
    awards: state.form.resume.values.awards
  }
}

const mapActions = {
  addAward,
  removeAward
}

export default connect(mapState, mapActions)(Awards)
