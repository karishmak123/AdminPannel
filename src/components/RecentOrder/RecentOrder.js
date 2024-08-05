import React from 'react'

const RecentOrder = () => {
  return (
    <div class="orders-container">
    <h2>Recent Orders</h2>
    <table>
        <thead>
            <tr>
                <th>Customer</th>
                <th>Order No.</th>
                <th>Amount</th>
                <th>Status</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="customer-info">
                    <img src="/image/demo-image.jpg" alt="Wade Warren" />
                    Wade Warren
                </td>
                <td>15478256</td>
                <td>$124.00</td>
                <td><span class="status-delivered">Delivered</span></td>
            </tr>
            <tr>
                <td class="customer-info">
                    <img src="/image/demo-image.jpg"  alt="Jane Cooper" />
                    Jane Cooper
                </td>
                <td>48965786</td>
                <td>$365.02</td>
                <td><span class="status-delivered">Delivered</span></td>
            </tr>
            <tr>
                <td class="customer-info">
                    <img src="/image/demo-image.jpg" alt="Guy Hawkins" />
                    Guy Hawkins
                </td>
                <td>78958215</td>
                <td>$45.88</td>
                <td><span class="status-canceled">Canceled</span></td>
            </tr>
            <tr>
                <td class="customer-info">
                    <img src="/image/demo-image.jpg" alt="Kristin Watson" />
                    Kristin Watson
                </td>
                <td>20965732</td>
                <td>$65.00</td>
                <td><span class="status-canceled">Pending</span></td>
            </tr>
            <tr>
                <td class="customer-info">
                    <img src="/image/demo-image.jpg" alt="Cody Fisher" />
                    Cody Fisher
                </td>
                <td>95715620</td>
                <td>$545.00</td>
                <td><span class="status-delivered">Delivered</span></td>
            </tr>
            <tr>
                <td class="customer-info">
                    <img src="/image/demo-image.jpg"  alt="Savannah Nguyen" />
                    Savannah Nguyen
                </td>
                <td>78514568</td>
                <td>$128.20</td>
                <td><span class="status-delivered">Delivered</span></td>
            </tr>
        </tbody>
    </table>
</div>
  )
}

export default RecentOrder