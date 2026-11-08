import React from 'react'

const Footer = ({ completedTaskCount = 0, activeTaskCount = 0 }) => {
  return <>
    {completedTaskCount + activeTaskCount > 0 && (
      <div className='text-center'>
        <p className='text-sm  text-muted-foreground'>
          {
            completedTaskCount > 0 && (
              <>
                Tuyệt vời! Bạn đã hoàn thành {completedTaskCount} việc rồi. Quá giỏi
                {activeTaskCount > 0 && `, còn ${activeTaskCount} việc nữa thui. Cố lên nhá!`}
              </>
            )
          }

          {completedTaskCount === 0 && activeTaskCount > 0 && (
            <>
            Hãy bắt đầu làm {activeTaskCount} nhiệm vụ dang dở nào!!!!
            </>
          )}
        </p>
      </div>
    )}
  </>
}

export default Footer
