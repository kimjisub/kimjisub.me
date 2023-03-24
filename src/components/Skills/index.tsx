import React from 'react';
import clsx from 'clsx';
import styles from './index.module.scss';
import IconView from '../IconView';
import { Content, Title, Title2 } from '../../typography';
import { Build } from '@mui/icons-material';
import { skills } from '@site/src/data/skills';
import { Skill } from '@site/src/model/skill';

export default function Skills() {
  const skillsByType: {
    [type: string]: Skill[];
  } = Object.values(skills).reduce((acc, skill) => {
    if (!acc[skill.type]) {
      acc[skill.type] = [];
    }
    acc[skill.type].push(skill);
    return acc;
  }, {});

  return (
    <div className={clsx(styles.root)}>
      <Title>
        <Build />
        Skills
      </Title>
      <Title2>제가 구사할 수 있는 능력들이에요</Title2>
      <table className={clsx(styles.table)}>
        <tbody>
          {Object.entries(skillsByType).map(([type, skills]) => (
            <tr key={type}>
              <td className={clsx(styles.text)}>{type}</td>
              <td className={clsx(styles.icons)}>
                {skills.map(skill => (
                  <IconView
                    key={skill.name}
                    icon={skill.icon}
                    description={skill.description}
                  />
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
