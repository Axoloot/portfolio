import { SkillType } from 'beautiful-skill-tree';

export const backend: SkillType = {
  id: 'backend',
  title: 'Backend',
  tooltip: {
    content:
      'This node is the top most level, and will be selected, and ready to be clicked.',
  },
  children: [
    {
      id: 'languages',
      title: 'Langages',
      tooltip: {
        content:
          'This node is the top most level, and will be selected, and ready to be clicked.',
      },
      children: [
        {
          id: 'python',
          title: 'Python',
          icon: require('../../Static/tech/python.png'),
          tooltip: {
            content:
              'This node is the top most level, and will be selected, and ready to be clicked.',
          },
          children: [],
        },
        {
          id: 'nodejs',
          title: 'Node.js',
          icon: require('../../Static/tech/nodejs.webp'),
          tooltip: {
            content:
              'This node is the top most level, and will be selected, and ready to be clicked.',
          },
          children: [],
        },
        {
          id: 'golang',
          title: 'Go (Golang)',
          icon: require('../../Static/tech/golang.png'),
          tooltip: {
            content:
              'This node is the top most level, and will be selected, and ready to be clicked.',
          },
          children: [],
        },
        {
          id: 'rust',
          title: 'Rust',
          icon: require('../../Static/tech/rust.png'),
          tooltip: {
            content:
              'This node is the top most level, and will be selected, and ready to be clicked.',
          },
          children: [],
        },
        {
          id: 'c',
          title: 'C',
          icon: require('../../Static/tech/C.png'),
          tooltip: {
            content:
              'This node is the top most level, and will be selected, and ready to be clicked.',
          },
          children: [],
        },
        {
          id: 'cpp',
          title: 'C++',
          icon: require('../../Static/tech/C++.png'),
          tooltip: {
            content:
              'This node is the top most level, and will be selected, and ready to be clicked.',
          },
          children: [],
        },
        {
          id: 'lua',
          title: 'Lua',
          icon: require('../../Static/tech/lua.png'),
          tooltip: {
            content:
              'This node is the top most level, and will be selected, and ready to be clicked.',
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
          'This node is the top most level, and will be selected, and ready to be clicked.',
      },
      children: [
        {
          id: 'sql',
          title: 'SQL',
          icon: require('../../Static/tech/sql.png'),
          tooltip: {
            content:
              'This node is the top most level, and will be selected, and ready to be clicked.',
          },
          children: [],
        },
        {
          id: 'postgresql',
          title: 'PostgreSQL',
          icon: require('../../Static/tech/postgresql.png'),
          tooltip: {
            content:
              'This node is the top most level, and will be selected, and ready to be clicked.',
          },
          children: [],
        },
        {
          id: 'mariadb',
          title: 'MariaDB',
          icon: require('../../Static/tech/mariadb.png'),
          tooltip: {
            content:
              'This node is the top most level, and will be selected, and ready to be clicked.',
          },
          children: [],
        },
        {
          id: 'mongodb',
          title: 'MongoDB',
          icon: require('../../Static/tech/mongodb.webp'),
          tooltip: {
            content:
              'This node is the top most level, and will be selected, and ready to be clicked.',
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
      'This node is the top most level, and will be selected, and ready to be clicked.',
  },
  children: [
    {
      id: 'frameworks',
      title: 'Frameworks',
      tooltip: {
        content:
          'This node is the top most level, and will be selected, and ready to be clicked.',
      },
      children: [
        {
          id: 'reactjs',
          title: 'React.js',
          icon: require('../../Static/tech/react.png'),
          tooltip: {
            content:
              'This node is the top most level, and will be selected, and ready to be clicked.',
          },
          children: [],
        },
        {
          id: 'nextjs',
          title: 'Next.js',
          icon: require('../../Static/tech/nextjs.webp'),
          tooltip: {
            content:
              'This node is the top most level, and will be selected, and ready to be clicked.',
          },
          children: [],
        },
        {
          id: 'reactnative',
          title: 'React Native',
          icon: require('../../Static/tech/reactnative.png'),
          tooltip: {
            content:
              'This node is the top most level, and will be selected, and ready to be clicked.',
          },
          children: [],
        },
        {
          id: 'angular',
          title: 'Angular',
          icon: require('../../Static/tech/angular.png'),
          tooltip: {
            content:
              'This node is the top most level, and will be selected, and ready to be clicked.',
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
          'This node is the top most level, and will be selected, and ready to be clicked.',
      },
      children: [
        {
          id: 'dart',
          title: 'Dart',
          icon: require('../../Static/tech/dart.png'),
          tooltip: {
            content:
              'This node is the top most level, and will be selected, and ready to be clicked.',
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
      'This node is the top most level, and will be selected, and ready to be clicked.',
    direction: 'left',
  },
  children: [
    {
      id: 'sre',
      title: 'SRE (Site Reliability Engineering)',
      tooltip: {
        content:
          'This node is the top most level, and will be selected, and ready to be clicked.',
      },
      children: [],
    },
    {
      id: 'kubernetes',
      title: 'Kubernetes',
      icon: require('../../Static/tech/kube.png'),
      tooltip: {
        content:
          'This node is the top most level, and will be selected, and ready to be clicked.',
      },
      children: [
        {
          id: 'helm',
          title: 'Helm',
          icon: require('../../Static/tech/helm.png'),
          tooltip: {
            content:
              'This node is the top most level, and will be selected, and ready to be clicked.',
          },
          children: [],
        },
        {
          id: 'tilt',
          title: 'Tilt',
          icon: require('../../Static/tech/titl.png'),
          tooltip: {
            content:
              'This node is the top most level, and will be selected, and ready to be clicked.',
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
          'This node is the top most level, and will be selected, and ready to be clicked.',
      },
      children: [
        {
          id: 'terraform',
          title: 'Terraform',
          icon: require('../../Static/tech/tf.png'),
          tooltip: {
            content:
              'This node is the top most level, and will be selected, and ready to be clicked.',
          },
          children: [],
        },
        {
          id: 'packer',
          title: 'Packer',
          icon: require('../../Static/tech/packer.png'),
          tooltip: {
            content:
              'This node is the top most level, and will be selected, and ready to be clicked.',
          },
          children: [],
        },
      ],
    },
    {
      id: 'cloudproviders',
      title: 'Cloud Providers',
      tooltip: {
        content:
          'This node is the top most level, and will be selected, and ready to be clicked.',
      },
      children: [
        {
          id: 'aws',
          title: 'AWS',
          icon: require('../../Static/tech/aws.png'),
          tooltip: {
            content:
              'This node is the top most level, and will be selected, and ready to be clicked.',
          },
          children: [],
        },
        {
          id: 'azure',
          icon: require('../../Static/tech/azure.png'),
          title: 'Azure',
          tooltip: {
            content:
              'This node is the top most level, and will be selected, and ready to be clicked.',
          },
          children: [],
        },
        {
          id: 'gcp',
          title: 'GCP (Google Cloud Platform)',
          icon: require('../../Static/tech/gcp.png'),
          tooltip: {
            content:
              'This node is the top most level, and will be selected, and ready to be clicked.',
          },
          children: [],
        },
      ],
    },
    {
      id: 'cicd',
      title: 'CI/CD Tools',
      tooltip: {
        content:
          'This node is the top most level, and will be selected, and ready to be clicked.',
      },
      children: [
        {
          id: 'vercel',
          title: 'Vercel',
          icon: require('../../Static/tech/vercel.png'),
          tooltip: {
            content:
              'This node is the top most level, and will be selected, and ready to be clicked.',
          },
          children: [],
        },
        {
          id: 'jenkins',
          title: 'Jenkins',
          icon: require('../../Static/tech/jenkins.png'),
          tooltip: {
            content:
              'This node is the top most level, and will be selected, and ready to be clicked.',
          },
          children: [],
        },
        {
          id: 'githubactions',
          title: 'GitHub Actions',
          icon: require('../../Static/tech/gh.png'),
          tooltip: {
            content:
              'This node is the top most level, and will be selected, and ready to be clicked.',
          },
          children: [],
        },
        {
          id: 'gitlabci',
          title: 'GitLab CI',
          icon: require('../../Static/tech/gitlabci.png'),
          tooltip: {
            content:
              'This node is the top most level, and will be selected, and ready to be clicked.',
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
    nodeState: 'selected',
  },
  languages: {
    optional: false,
    nodeState: 'selected',
  },
  python: {
    optional: false,
    nodeState: 'selected',
  },
  nodejs: {
    optional: false,
    nodeState: 'selected',
  },
  golang: {
    optional: false,
    nodeState: 'selected',
  },
  rust: {
    optional: false,
    nodeState: 'selected',
  },
  c: {
    optional: false,
    nodeState: 'selected',
  },
  cpp: {
    optional: false,
    nodeState: 'selected',
  },
  lua: {
    optional: false,
    nodeState: 'selected',
  },
  databases: {
    optional: false,
    nodeState: 'selected',
  },
  sql: {
    optional: false,
    nodeState: 'selected',
  },
  postgresql: {
    optional: false,
    nodeState: 'selected',
  },
  mariadb: {
    optional: false,
    nodeState: 'selected',
  },
  mongodb: {
    optional: false,
    nodeState: 'selected',
  },
};

export const frontendSD = {
  frontend: {
    optional: false,
    nodeState: 'selected',
  },
  frameworks: {
    optional: false,
    nodeState: 'selected',
  },
  reactjs: {
    optional: false,
    nodeState: 'selected',
  },
  nextjs: {
    optional: false,
    nodeState: 'selected',
  },
  reactnative: {
    optional: false,
    nodeState: 'selected',
  },
  angular: {
    optional: false,
    nodeState: 'selected',
  },
  flutter: {
    optional: false,
    nodeState: 'selected',
  },
  dart: {
    optional: false,
    nodeState: 'selected',
  },
};

const devopsSD = {
  devops: {
    optional: false,
    nodeState: 'selected',
  },
  sre: {
    optional: false,
    nodeState: 'selected',
  },
  kubernetes: {
    optional: false,
    nodeState: 'selected',
  },
  helm: {
    optional: false,
    nodeState: 'selected',
  },
  tilt: {
    optional: false,
    nodeState: 'selected',
  },
  infrastructure: {
    optional: false,
    nodeState: 'selected',
  },
  terraform: {
    optional: false,
    nodeState: 'selected',
  },
  packer: {
    optional: false,
    nodeState: 'selected',
  },
  cloudproviders: {
    optional: false,
    nodeState: 'selected',
  },
  aws: {
    optional: false,
    nodeState: 'selected',
  },
  azure: {
    optional: false,
    nodeState: 'selected',
  },
  gcp: {
    optional: false,
    nodeState: 'selected',
  },
  cicd: {
    optional: false,
    nodeState: 'selected',
  },
  vercel: {
    optional: false,
    nodeState: 'selected',
  },
  jenkins: {
    optional: false,
    nodeState: 'selected',
  },
  githubactions: {
    optional: false,
    nodeState: 'selected',
  },
  gitlabci: {
    optional: false,
    nodeState: 'selected',
  },
};

// const unixSD = {
//   unix: {
//     optional: true,
//     nodeState: 'selected',
//   },
//   shellscripting: {
//     optional: false,
//     nodeState: 'selected',
//   },
//   bash: {
//     optional: false,
//     nodeState: 'selected',
//   },
//   powershell: {
//     optional: false,
//     nodeState: 'selected',
//   },
// };

export const skills = [[backend], [frontend], [root, unix]];
export const savedSkills = [backendSD, frontendSD, devopsSD];
