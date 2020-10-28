export default [{
	title: '主页',
	path: '/main',
	routes: [{
		title: '项目管理',
		path: '/main/project-manage',
		routes: [{
			desc: '项目添加，删除，修改。',
			path: '/main/project-manage/list',
		}, {
			title: '添加项目',
			path: '/main/project-manage/create',
		}, {
			title: '编辑项目',
			path: '/main/project-manage/modify',
		}]
	}]
}]
