import React from 'react'

const Activity = () => {
  return (
    <>
      <div class="d-flex justify-content-between">
        <div className="d-inline-block">Activity</div>
        <div className="d-inline-block text-danger">
          <div class="select-wrapper">
            <select class="custom-select">
              <option value="">Weekly</option>
            </select>
          </div>
        </div>
      </div>
      <img src="/image/graph.png" alt="graph" />

    </>
  )
}

export default Activity