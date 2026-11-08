import React from 'react'
import { Card } from './ui/card'
import { Circle } from 'lucide-react'

const TaskEmptyState = ({ filter }) => {
  return (
    <Card className='p-8 text-center border-0 bg-gradient-card show-custom-md'>
      <div className='space-y-3'>
        <Circle className='mx-auto size-12 text-muted-foreground' />
        <div>

          <h3 className='font-medium text-foreground'>
            {
              filter === 'active' ? 'Không có việc đang làm' :
                filter === 'completed' ? 'Chưa có việc nào hoàn thành' :
                  'Chưa có gì để làm'
            }
          </h3>

          <p className='text-sm text-muted-foreground'>
            {
              filter === 'all' ? 'Hãy thêm một việc mới để bắt đầu' :
                `Chuyển sang 'tất cả' để xem tất cả nhiệm vụ ${filter === 'active' ? 'đã hoàn thành' :
                  'đang làm'}`
            }
          </p>
        </div>
      </div>
    </Card>
  )
}

export default TaskEmptyState
