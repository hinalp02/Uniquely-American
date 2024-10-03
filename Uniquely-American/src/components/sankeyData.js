import * as d3 from 'd3';
import keySet from '../data/grouped-data.json';

// Structure to form the data for the sankey
const dataHierarchy = {
  name: "Why Did They Do It?",
  subgroups: [
    {
      name: "Mental Health Factors",
      subgroups: [
        // { name: "General Mental Health Issues",
        //   subgroups: [
        //     { name: "Mental Illness", value: 0 },//findSubgroupsByName(keySet, "Mental Illness") },
        //     //{ name: "Signs of Being in Crisis", value: 0}, //findSubgroupsByName(keySet, "Signs of Being in Crisis") },
        //    // { name: "Prior Counseling", value: 0 }, //findSubgroupsByName(keySet, "Prior Counseling") },
        // ]
        // },
        { name: "Specific Conditions and Behaviors",
        subgroups: [
          { name: "Suicidality", value: 0 },
          { name: "Role of Psychosis", value: 0 },
          { name: "FASD (Fetal Alcohol Spectrum Disorder)", value: 0 },
        ]
        },
        { name: "Treatment and History",
          subgroups: [
          { name: "Mental Illness", value: 0 },
          { name: "Known Family Mental Health History", value: 0 },
          { name: "Prior Hospitalization", value: 0 },
          { name: "Prior Counseling", value: 0 },
        ]
        },
        {
          name: "Personal Stressors",
          subgroups: [
            { name: "Substance Use", value: 0 },
            { name: "Health Issue", value: 0 },
            { name: "Parental Death in Childhood", value: 0 },
            { name: "Mother Violent Treatment", value: 0 },
            { name: "Parental Substance Abuse", value: 0 },
            { name: "Parent Criminal Record", value: 0 },
            { name: "Family Member Incarcerated", value: 0 },
          ]
        },
      ]
    },
    {
      name: "Behavioral Indicators",
      subgroups: [
        {
          name: "Warning Signs",
          subgroups: [
            { name: "Signs of Being in Crisis", value: 0 },
            { name: "Abusive Behavior", value: 0 },
            { name: "Isolation", value: 0 },
            { name: "Losing Touch with Reality", value: 0 },
            { name: "Paranoia", value: 0 },
            { name: "Leakage", value: 0 },
          ]
        },
        {
          name: "Changes in Mood",
          subgroups: [
            { name: "Notably Depressed Mood", value: 0 },
            { name: "Unusually Calm or Happy", value: 0 },
            { name: "Rapid Mood Swings", value: 0 },
            { name: "Increased Agitation", value: 0 },
            //{ name: "Losing Touch with Reality", value: 0 },
          ]
        },
        {
          name: "Historical Factors",
          subgroups: [
            { name: "History of Physical Altercations", value: 0 },
            { name: "History of Animal Abuse", value: 0 },
            { name: "History of Domestic Abuse", value: 0 },
            { name: "Domestic Abuse Specified", value: 0 },
            { name: "History of Sexual Offenses", value: 0 },
          ]
        },
        { name: "Interest in Firearms", value: 0 },
      ]
    },
    {
      name: "Psychological Factors",
      subgroups: [
        {
          name: "Abuse History",
          subgroups: [
            { name: "Physically Abused" , value: 0 },
            { name: "Sexually Abused"   , value: 0 },
            { name: "Emotionally Abused", value: 0 },
            // { name: "Bully", value: 0 },
            // { name: "Bullied", value: 0 },
        ]
        },
        { name: "Bully", value: 0 },
        { name: "Bullied", value: 0 },
        //{ name: "Role of Psychosis", value: 0 },
        { name: "Parental Suicide"  , value: 0 },
        { name: "Childhood Trauma", value: 0 },
        { name: "Neglected", value: 0 },
        { name: "Interest in Past Mass Violence", value: 0 },
      ]
    },
    {
      name: "Social and Community Factors",
      subgroups: [
        { name: "Military Service", value: 0 },
        { name: "Gang Affiliation", value: 0 },
        { name: "Terror Group Affiliation", value: 0 },
        { name: "Criminal Record", value: 0 },
      ]
    },
    {
      name: "Explicit Motives and Prejudices",
      subgroups: [
        {
          name: "Known Motives",
          subgroups: [
            {
              name: "Ideological Motives",
              subgroups: [
                { name: "Motive: Racism", value: 0 },
                { name: "Motive: Religious Hate", value: 0 },
                { name: "Motive: Misogyny", value: 0 },
                { name: "Motive: Homophobia", value: 0 },
              ]
            },
            {
              name: "Personal Grievances",
              subgroups: [
                { name: "Motive: Employment Issue", value: 0 },
                { name: "Motive: Relationship Issue", value: 0 },
                { name: "Motive: Legal Issue", value: 0 },
                { name: "Motive: Interpersonal Conflict", value: 0 },
              ]
            },
            { name: "Motive: Fame-Seeking", value: 0 },
            { name: "Motive: Other", value: 0 },
          ]

        },
        { name: "Motive: Unknown", value: 0 }
      ]
    },
  ]
};

const getUid = n => [n.height ? 'n' : 'leaf', n.data.name, n.value].join('-')


// const getColor = n => {
//   if (n.depth === 0) return 'black'
//   if (n.depth === 1) {

//     return baseColors(n.data.name)
//   }
//   n.colorScale = d3.interpolateRgb()
//   return d3.interpolateRgb(n.parent.color, '#fff')()
// }

// Recursively forms subgroups into a nested structure
function transformData(root) {
  if (!root.subgroups) {
    if (!keySet[root.name]) console.warn(`Could not find ${root.name}`)
    const items = keySet[root.name].values
    const subgroups = Object.keys(items).reduce((arr, k) => {
      if (k !== '0') {
        arr.push({ name: k, value: items[k].length })
      }
      return arr
    }, [])
    root.subgroups = subgroups
  } else {
    root.subgroups?.forEach(transformData)
  }
  return root
}


const root = d3.hierarchy(transformData(dataHierarchy), d => d.subgroups)
  .sum(d => d.value)
  .each(n => {

    // n.children.forEach((n, i) => n._index = i)
    n.data = {
      // Update these to add more information per node
      depth: n.depth,
      isRootNode: n.depth === 0,
      expanded: n.depth === 0,
      sourceGroup: n.depth <= 1 ? n : n.parent.data.sourceGroup,
      path: n.parent?.data.sourceGroup ? n.parent.data.sourceGroup.path(n) : [],
      ancestors: n.ancestors().map(d => d.data.id), // all nodes in the path (from root -> current)
      id: getUid(n),
      label: n.data.name,
      percentage: `${Number(n.value / (n.parent?.value ?? n.value) * 100).toFixed(1)}%`,
      value: n.value,
    }
  })
  .eachBefore(n => {
    if (n.depth === 0) {
      // Root node: set color black and establish color
      n.colorScale = d3.scaleOrdinal(d3.schemeCategory10);
      n.data.nodeColor = '#6F6D6D';

    } else if (n.depth === 1) {
      // Child nodes: uses the ordinal scale for the first level of children
      n.data.nodeColor = n.parent.colorScale(n.parent.children.indexOf(n));
    } else {
      // Sub child nodes: create a gradient based on the parent's color
      n.colorScale = d3.scaleSequential(d3.interpolateRgb(n.parent.data.nodeColor, 'fff'))
      //n.colorScale = d3.scaleSequential(d3.interpolateHclLong(n.parent.data.nodeColor, 'gray'))
        .domain([0, n.children?.length]);
      n.data.nodeColor = n.colorScale(n.parent.children.indexOf(n));

    }
    // n.colorScale = n.depth === 0
    // ? d3.scaleOrdinal(d3.schemeCategory10)
    // : d3.scaleSequential(d3.interpolateRgb(n.parent.data.nodeColor, '#fff'))
    //     .domain([0, n.children?.length])
    // n.data.nodeColor = n.parent?.colorScale(n.parent.children.indexOf(n)) ?? '#000'
  })
  .eachAfter(n => {
    if (n.children) {
      const children = n.children.map(c => c.data)
      n.data.subgroups = children.filter(n => !n.id.startsWith('leaf'))
      n.data.expandable = n.data.subgroups.length > 0
      n.data.subgroupLinks = children.map(c => ({
        source: n.data.id,
        target: c.id,
        value: c.value,
      }))
    }
  })

// All the node objects
const allNodes = root.descendants().map(n => n.data)

// Initial data: all nodes with depth 0 or 1
const nodes = allNodes.filter(n => n.depth <= 1)

export class SankeyData {
  constructor() {
    this.nodes = nodes;

    this.data = () => {
      return {
        nodes: this.nodes,
        links: this.nodes.flatMap(n => n.subgroupLinks),
      };
    };
    // Expand the node into its subgroups
    this.expand = node => {
      //console.log('expanding', node.subgroups.length, node.nodeColor, node.subgroups)
      console.log('\nexpandable\n', this.nodes.expandable === true);
      this.nodes[node._index].expanded = true;
      this.nodes.push(...node.subgroups);

      //this.links.push(...node.subgroupLinks);
    };
    // Collapse the node back to its original state
    this.collapse = node => {
      //console.log('collapsing', node.subgroups.length)
      this.nodes[node._index].expanded = false;
      this.nodes = this.nodes.filter(n => !n.ancestors.includes(node.id));
      //this.links = this.links.filter(l => l)
    };

    return this;
  }
}
