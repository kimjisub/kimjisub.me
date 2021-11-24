import React from 'react'
import clsx from 'clsx'
import styles from './index.module.scss'
import IconView from '../../components/IconView'
import { Content } from '../../typography'

export default function Skills() {
	return (
		<div className={clsx(styles.root)}>
			<div className={clsx(styles.row)}>
				<Content className={clsx(styles.text)}>Language</Content>
				<IconView slug="html5" />
				<IconView slug="css3" />
				<IconView slug="javascript" />
				<IconView slug="typescript" />
				<IconView slug="kotlin" />
				<IconView slug="java" />
				<IconView slug="python" />
				<IconView slug="dart" />
				<IconView slug="cplusplus" />
				<IconView slug="csharp" />
			</div>
			<div className={clsx(styles.row)}>
				<Content className={clsx(styles.text)}>
					{'Platform & Framework'}
				</Content>
				<IconView slug="android" />
				<IconView slug="nodedotjs" />
				<IconView slug="react" />
				<IconView slug="flutter" />
				<IconView slug="arduino" />
				<IconView slug="raspberrypi" />
				<IconView slug="unity" />
			</div>
			<div className={clsx(styles.row)}>
				<Content className={clsx(styles.text)}>Database</Content>
				<IconView slug="mongodb" />
				<IconView slug="mysql" />
				<IconView slug="mariadb" />
				<IconView slug="postgresql" />
				<IconView slug="sqlite" />
				<IconView slug="sequelize" />
			</div>
			<div className={clsx(styles.row)}>
				<Content className={clsx(styles.text)}>{'CI/CD'}</Content>
				<IconView slug="github" />
				<IconView slug="git" />
				<IconView slug="githubactions" />
				<IconView slug="docker" />
				<IconView slug="googleplay" />
				<IconView slug="googlecloud" />
				<IconView slug="firebase" />
				<IconView slug="cloudflare" />
				<IconView slug="amazonaws" />
			</div>

			<div className={clsx(styles.row)}>
				<Content className={clsx(styles.text)}>Operate System</Content>
				<IconView slug="apple" />
				<IconView slug="windows" />
				<IconView slug="ubuntu" />
				<IconView slug="linux" />
				<IconView slug="synology" />
			</div>
			<div className={clsx(styles.row)}>
				<Content className={clsx(styles.text)}>IDE</Content>
				<IconView slug="visualstudiocode" />
				<IconView slug="androidstudio" />
				<IconView slug="xcode" />
				<IconView slug="visualstudio" />
				<IconView slug="anaconda" />
				<IconView slug="jupyter" />
			</div>
			<div className={clsx(styles.row)}>
				<Content className={clsx(styles.text)}>Tools</Content>
				<IconView slug="adobephotoshop" />
				<IconView slug="adobeillustrator" />
				<IconView slug="adobepremierepro" />
				<IconView slug="adobeaftereffects" />
				<IconView slug="sketch" />
				<IconView slug="figma" />
				<IconView slug="blender" />
				<IconView slug="abletonlive" />
			</div>
			<div className={clsx(styles.row)}>
				<Content className={clsx(styles.text)}>Social</Content>
				<IconView slug="facebook" />
				<IconView slug="instagram" />
				<IconView slug="discord" />
				<IconView slug="slack" />
				<IconView slug="notion" />
			</div>
			<div className={clsx(styles.row)}>
				<Content className={clsx(styles.text)}>Gaming</Content>
				<IconView slug="steam" />
				<IconView slug="epicgames" />
				<IconView slug="ubisoft" />
				<IconView slug="oculus" />
				<IconView slug="nintendoswitch" />
			</div>
		</div>
	)
}