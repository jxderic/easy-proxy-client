import React from 'react'
import {
	Spin
} from 'antd'
import Icon from '@ant-design/icons'

export default (importFn) => {
	const loading = (
		<div style={{ textAlign: 'center', paddingTop: '200px', width: '100%' }}>
			<Spin indicator={<Icon type="loading" style={{ fontSize: 24 }} spin />} />
		</div>
	)

	const LazyComp = React.lazy(importFn)

	const suspenseComp = () => (
		<React.Suspense fallback={loading}>
			<LazyComp />
			{/* {loading} */}
		</React.Suspense>
	)

	suspenseComp.preload = importFn

	return suspenseComp
}
