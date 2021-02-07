import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Donate from 'components/Donate'

const Footer: React.FC = () => {
  const [showDonate, setShowDonate] = useState<boolean>(false)
  return (
    <>
      {showDonate && <Donate state={showDonate} buttonOnclick={() => setShowDonate(false)} />}
      <div className="w-full text-sm text-center pb-1 ease-in" onClick={(e) => e.currentTarget.blur()}>
        <a href="https://github.com/whexy/qwerty-learner">
          <FontAwesomeIcon icon={['fab', 'github']} className="text-gray-500 mr-3" />
        </a>

        <a href="mailto:gwhexy@gmail.com" onClick={(e) => e.currentTarget.blur()}>
          <FontAwesomeIcon icon={['fas', 'envelope']} className="text-gray-500 mr-3" />
        </a>
        <a className="text-gray-500 no-underline hover:no-underline" href="#/" onClick={(e) => e.currentTarget.blur()}>
          @ Qwerty Learner
        </a>

        <a href="https://www.whexy.com" className="text-gray-500 mr-3">
          (modified by Wenxuan SHI)
        </a>
      </div>
    </>
  )
}

export default React.memo(Footer)
