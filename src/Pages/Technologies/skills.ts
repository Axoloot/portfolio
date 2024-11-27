import { SkillType } from 'beautiful-skill-tree';

export const backend: SkillType = {
  id: 'backend',
  title: 'Backend',
  tooltip: {
    content:
      'This node is the top most level, and will be unlocked, and ready to be clicked.',
  },
  children: [
    {
      id: 'languages',
      title: 'Langages',
      tooltip: {
        content:
          'This node is the top most level, and will be unlocked, and ready to be clicked.',
      },
      children: [
        {
          id: 'python',
          title: 'Python',
          icon: require('../../Static/tech/python.png'),
          tooltip: {
            content:
              'This node is the top most level, and will be unlocked, and ready to be clicked.',
          },
          children: [],
        },
        {
          id: 'nodejs',
          title: 'Node.js',
          icon: require('../../Static/tech/nodejs.webp'),
          tooltip: {
            content:
              'This node is the top most level, and will be unlocked, and ready to be clicked.',
          },
          children: [],
        },
        {
          id: 'golang',
          title: 'Go (Golang)',
          icon: require('../../Static/tech/golang.png'),
          tooltip: {
            content:
              'This node is the top most level, and will be unlocked, and ready to be clicked.',
          },
          children: [],
        },
        {
          id: 'rust',
          title: 'Rust',
          icon: require('../../Static/tech/rust.png'),
          tooltip: {
            content:
              'This node is the top most level, and will be unlocked, and ready to be clicked.',
          },
          children: [],
        },
        {
          id: 'c',
          title: 'C',
          icon: require('../../Static/tech/C.png'),
          tooltip: {
            content:
              'This node is the top most level, and will be unlocked, and ready to be clicked.',
          },
          children: [],
        },
        {
          id: 'c++',
          title: 'C++',
          icon: require('../../Static/tech/C++.png'),
          tooltip: {
            content:
              'This node is the top most level, and will be unlocked, and ready to be clicked.',
          },
          children: [],
        },
        {
          id: 'lua',
          title: 'Lua',
          icon: require('../../Static/tech/lua.png'),
          tooltip: {
            content:
              'This node is the top most level, and will be unlocked, and ready to be clicked.',
          },
          children: [],
        },
      ],
    },
    {
      id: 'databases',
      title: 'Bases de Données',
      tooltip: {
        content:
          'This node is the top most level, and will be unlocked, and ready to be clicked.',
      },
      children: [
        {
          id: 'sql',
          title: 'SQL',
          icon: require('../../Static/tech/sql.png'),
          tooltip: {
            content:
              'This node is the top most level, and will be unlocked, and ready to be clicked.',
          },
          children: [],
        },
        {
          id: 'postgresql',
          title: 'PostgreSQL',
          icon: require('../../Static/tech/postgresql.png'),
          tooltip: {
            content:
              'This node is the top most level, and will be unlocked, and ready to be clicked.',
          },
          children: [],
        },
        {
          id: 'mariadb',
          title: 'MariaDB',
          icon: require('../../Static/tech/mariadb.png'),
          tooltip: {
            content:
              'This node is the top most level, and will be unlocked, and ready to be clicked.',
          },
          children: [],
        },
        {
          id: 'mongodb',
          title: 'MongoDB',
          icon: require('../../Static/tech/mongodb.webp'),
          tooltip: {
            content:
              'This node is the top most level, and will be unlocked, and ready to be clicked.',
          },
          children: [],
        },
      ],
    },
  ],
};

export const frontend: SkillType = {
  id: 'frontend',
  title: 'Frontend',
  tooltip: {
    content:
      'This node is the top most level, and will be unlocked, and ready to be clicked.',
  },
  children: [
    {
      id: 'frameworks',
      title: 'Frameworks',
      tooltip: {
        content:
          'This node is the top most level, and will be unlocked, and ready to be clicked.',
      },
      children: [
        {
          id: 'reactjs',
          title: 'React.js',
          icon: require('../../Static/tech/react.png'),
          tooltip: {
            content:
              'This node is the top most level, and will be unlocked, and ready to be clicked.',
          },
          children: [],
        },
        {
          id: 'nextjs',
          title: 'Next.js',
          icon: require('../../Static/tech/nextjs.webp'),
          tooltip: {
            content:
              'This node is the top most level, and will be unlocked, and ready to be clicked.',
          },
          children: [],
        },
        {
          id: 'react-native',
          title: 'React Native',
          icon: require('../../Static/tech/reactnative.png'),
          tooltip: {
            content:
              'This node is the top most level, and will be unlocked, and ready to be clicked.',
          },
          children: [],
        },
        {
          id: 'angular',
          title: 'Angular',
          icon: require('../../Static/tech/angular.png'),
          tooltip: {
            content:
              'This node is the top most level, and will be unlocked, and ready to be clicked.',
          },
          children: [],
        },
      ],
    },
    {
      id: 'flutter',
      title: 'Flutter',
      icon: require('../../Static/tech/flutter.png'),
      tooltip: {
        content:
          'This node is the top most level, and will be unlocked, and ready to be clicked.',
      },
      children: [
        {
          id: 'dart',
          title: 'Dart',
          icon: require('../../Static/tech/dart.png'),
          tooltip: {
            content:
              'This node is the top most level, and will be unlocked, and ready to be clicked.',
          },
          children: [],
        },
      ],
    },
  ],
};

export const unix: SkillType = {
  id: 'unix',
  title: 'Unix',
  icon: require('../../Static/tech/Tux.svg.png'),
  tooltip: {
    content:
      'This node is the top most level, and will be unlocked, and ready to be clicked.',
  },
  children: [
    {
      id: 'shell-scripting',
      title: 'Shell Scripting',
      tooltip: {
        content:
          'This node is the top most level, and will be unlocked, and ready to be clicked.',
      },
      children: [
        {
          id: 'bash',
          title: 'Bash',
          tooltip: {
            content:
              'This node is the top most level, and will be unlocked, and ready to be clicked.',
          },
          children: [],
        },
        {
          id: 'powershell',
          title: 'PowerShell',
          tooltip: {
            content:
              'This node is the top most level, and will be unlocked, and ready to be clicked.',
          },
          children: [],
        },
      ],
    },
  ],
};

export const root: SkillType = {
  id: 'devops',
  title: 'DevOps',
  tooltip: {
    content:
      'This node is the top most level, and will be unlocked, and ready to be clicked.',
    direction: 'left',
  },
  children: [
    {
      id: 'sre',
      title: 'SRE (Site Reliability Engineering)',
      tooltip: {
        content:
          'This node is the top most level, and will be unlocked, and ready to be clicked.',
      },
      children: [],
    },
    {
      id: 'kubernetes',
      title: 'Kubernetes',
      icon: require('../../Static/tech/kube.png'),
      tooltip: {
        content:
          'This node is the top most level, and will be unlocked, and ready to be clicked.',
      },
      children: [
        {
          id: 'helm',
          title: 'Helm',
          icon: require('../../Static/tech/helm.png'),
          tooltip: {
            content:
              'This node is the top most level, and will be unlocked, and ready to be clicked.',
          },
          children: [],
        },
        {
          id: 'tilt',
          title: 'Tilt',
          icon: require('../../Static/tech/titl.png'),
          tooltip: {
            content:
              'This node is the top most level, and will be unlocked, and ready to be clicked.',
          },
          children: [],
        },
      ],
    },
    {
      id: 'infrastructure',
      title: 'IaC',
      tooltip: {
        content:
          'This node is the top most level, and will be unlocked, and ready to be clicked.',
      },
      children: [
        {
          id: 'terraform',
          title: 'Terraform',
          icon: require('../../Static/tech/tf.png'),
          tooltip: {
            content:
              'This node is the top most level, and will be unlocked, and ready to be clicked.',
          },
          children: [],
        },
        {
          id: 'packer',
          title: 'Packer',
          icon: require('../../Static/tech/packer.png'),
          tooltip: {
            content:
              'This node is the top most level, and will be unlocked, and ready to be clicked.',
          },
          children: [],
        },
      ],
    },
    {
      id: 'cloud-providers',
      title: 'Cloud Providers',
      tooltip: {
        content:
          'This node is the top most level, and will be unlocked, and ready to be clicked.',
      },
      children: [
        {
          id: 'ci-cd',
          title: 'CI/CD Tools',
          tooltip: {
            content:
              'This node is the top most level, and will be unlocked, and ready to be clicked.',
          },
          children: [
            {
              id: 'vercel',
              title: 'Vercel',
              icon: require('../../Static/tech/vercel.png'),
              tooltip: {
                content:
                  'This node is the top most level, and will be unlocked, and ready to be clicked.',
              },
              children: [],
            },
            {
              id: 'jenkins',
              title: 'Jenkins',
              icon: require('../../Static/tech/jenkins.png'),
              tooltip: {
                content:
                  'This node is the top most level, and will be unlocked, and ready to be clicked.',
              },
              children: [],
            },
            {
              id: 'github-actions',
              title: 'GitHub Actions',
              icon: require('../../Static/tech/gh.png'),
              tooltip: {
                content:
                  'This node is the top most level, and will be unlocked, and ready to be clicked.',
              },
              children: [],
            },
            {
              id: 'gitlab-ci',
              title: 'GitLab CI',
              icon: require('../../Static/tech/gitlabci.png'),
              tooltip: {
                content:
                  'This node is the top most level, and will be unlocked, and ready to be clicked.',
              },
              children: [],
            },
          ],
        },
        {
          id: 'aws',
          title: 'AWS',
          icon: require('../../Static/tech/aws.png'),
          tooltip: {
            content:
              'This node is the top most level, and will be unlocked, and ready to be clicked.',
          },
          children: [],
        },
        {
          id: 'azure',
          icon: require('../../Static/tech/azure.png'),
          title: 'Azure',
          tooltip: {
            content:
              'This node is the top most level, and will be unlocked, and ready to be clicked.',
          },
          children: [],
        },
        {
          id: 'gcp',
          title: 'GCP (Google Cloud Platform)',
          icon: require('../../Static/tech/gcp.png'),
          tooltip: {
            content:
              'This node is the top most level, and will be unlocked, and ready to be clicked.',
          },
          children: [],
        },
      ],
    },
  ],
};

export const backendSD = {
  backend: {
    optional: false,
    nodeState: 'unlocked',
  },
};

const list = [backend, frontend, root, unix];
export default list;
