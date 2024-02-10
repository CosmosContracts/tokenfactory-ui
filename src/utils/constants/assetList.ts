export const junoAssetList = {
	$schema: "../assetlist.schema.json",
	assets: [
		{
			base: "ujuno",
			coingecko_id: "juno-network",
			denom_units: [
				{
					denom: "ujuno",
					exponent: 0
				},
				{
					denom: "juno",
					exponent: 6
				}
			],
			description: "The native token of JUNO Chain",
			display: "juno",
			images: [
				{
					png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.png",
					svg: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.svg"
				}
			],
			logo_URIs: {
				png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.png",
				svg: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.svg"
			},
			name: "Juno",
			symbol: "JUNO"
		},
		{
			base: "ibc/C4CFF46FD6DE35CA4CF4CE031E643C8FDC9BA4B99AE598E9B0ED98FE3A2319F9",
			denom_units: [
				{
					denom:
						"ibc/C4CFF46FD6DE35CA4CF4CE031E643C8FDC9BA4B99AE598E9B0ED98FE3A2319F9",
					exponent: 0
				},
				{
					denom: "atom",
					exponent: 6
				}
			],
			display: "atom",
			images: [
				{
					image_sync: {
						base_denom: "uatom",
						chain_name: "cosmoshub"
					},
					png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png",
					svg: "https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg"
				}
			],
			logo_URIs: {
				png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png",
				svg: "https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg"
			},
			name: "ATOM on Juno",
			symbol: "ATOM",
			traces: [
				{
					chain: {
						channel_id: "channel-1",
						path: "transfer/channel-1/uatom"
					},
					counterparty: {
						base_denom: "uatom",
						chain_name: "cosmoshub",
						channel_id: "channel-207"
					},
					type: "ibc"
				}
			],
			type_asset: "ics20"
		},
		{
			address:
				"juno168ctmpyppk90d34p3jjy658zf5a5l3w8wk35wht6ccqj4mr0yv8s4j5awr",
			base: "cw20:juno168ctmpyppk90d34p3jjy658zf5a5l3w8wk35wht6ccqj4mr0yv8s4j5awr",
			coingecko_id: "neta",
			denom_units: [
				{
					denom:
						"cw20:juno168ctmpyppk90d34p3jjy658zf5a5l3w8wk35wht6ccqj4mr0yv8s4j5awr",
					exponent: 0
				},
				{
					denom: "neta",
					exponent: 6
				}
			],
			description: "The native token cw20 for Neta on Juno Chain",
			display: "neta",
			images: [
				{
					png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/neta.png",
					svg: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/neta.svg"
				}
			],
			logo_URIs: {
				png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/neta.png",
				svg: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/neta.svg"
			},
			name: "Neta",
			symbol: "NETA",
			type_asset: "cw20"
		},
		{
			address:
				"juno1g2g7ucurum66d42g8k5twk34yegdq8c82858gz0tq2fc75zy7khssgnhjl",
			base: "cw20:juno1g2g7ucurum66d42g8k5twk34yegdq8c82858gz0tq2fc75zy7khssgnhjl",
			coingecko_id: "marble",
			denom_units: [
				{
					denom:
						"cw20:juno1g2g7ucurum66d42g8k5twk34yegdq8c82858gz0tq2fc75zy7khssgnhjl",
					exponent: 0
				},
				{
					denom: "marble",
					exponent: 3
				}
			],
			description: "The native token cw20 for Marble DAO on Juno Chain",
			display: "marble",
			images: [
				{
					png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/marble.png",
					svg: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/marble.svg"
				}
			],
			logo_URIs: {
				png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/marble.png",
				svg: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/marble.svg"
			},
			name: "Marble",
			symbol: "MARBLE",
			type_asset: "cw20"
		},
		{
			address:
				"juno1re3x67ppxap48ygndmrc7har2cnc7tcxtm9nplcas4v0gc3wnmvs3s807z",
			base: "cw20:juno1re3x67ppxap48ygndmrc7har2cnc7tcxtm9nplcas4v0gc3wnmvs3s807z",
			coingecko_id: "hope-galaxy",
			denom_units: [
				{
					denom:
						"cw20:juno1re3x67ppxap48ygndmrc7har2cnc7tcxtm9nplcas4v0gc3wnmvs3s807z",
					exponent: 0
				},
				{
					denom: "hope",
					exponent: 6
				}
			],
			description:
				"Hope Galaxy is an NFT collection based on its own native Token $HOPE, a cw20 token on Juno chain.",
			display: "hope",
			images: [
				{
					png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hope.png",
					svg: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hope.svg"
				}
			],
			logo_URIs: {
				png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hope.png",
				svg: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hope.svg"
			},
			name: "Hope Galaxy",
			symbol: "HOPE",
			type_asset: "cw20"
		},
		{
			address:
				"juno1r4pzw8f9z0sypct5l9j906d47z998ulwvhvqe5xdwgy8wf84583sxwh0pa",
			base: "cw20:juno1r4pzw8f9z0sypct5l9j906d47z998ulwvhvqe5xdwgy8wf84583sxwh0pa",
			coingecko_id: "racoon",
			denom_units: [
				{
					denom:
						"cw20:juno1r4pzw8f9z0sypct5l9j906d47z998ulwvhvqe5xdwgy8wf84583sxwh0pa",
					exponent: 0
				},
				{
					denom: "rac",
					exponent: 6
				}
			],
			description:
				"Racoon aims to simplify accessibility to AI, NFTs and Gambling on the Cosmos Ecosystem",
			display: "rac",
			images: [
				{
					png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/rac.png",
					svg: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/rac.svg"
				}
			],
			logo_URIs: {
				png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/rac.png",
				svg: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/rac.svg"
			},
			name: "Racoon",
			symbol: "RAC",
			type_asset: "cw20"
		},
		{
			address:
				"juno1y9rf7ql6ffwkv02hsgd4yruz23pn4w97p75e2slsnkm0mnamhzysvqnxaq",
			base: "cw20:juno1y9rf7ql6ffwkv02hsgd4yruz23pn4w97p75e2slsnkm0mnamhzysvqnxaq",
			denom_units: [
				{
					denom:
						"cw20:juno1y9rf7ql6ffwkv02hsgd4yruz23pn4w97p75e2slsnkm0mnamhzysvqnxaq",
					exponent: 0
				},
				{
					denom: "block",
					exponent: 6
				}
			],
			description: "The native token of Marble DEX on Juno Chain",
			display: "block",
			images: [
				{
					png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/block.png",
					svg: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/block.svg"
				}
			],
			logo_URIs: {
				png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/block.png",
				svg: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/block.svg"
			},
			name: "Block",
			symbol: "BLOCK",
			type_asset: "cw20"
		},
		{
			address:
				"juno1tdjwrqmnztn2j3sj2ln9xnyps5hs48q3ddwjrz7jpv6mskappjys5czd49",
			base: "cw20:juno1tdjwrqmnztn2j3sj2ln9xnyps5hs48q3ddwjrz7jpv6mskappjys5czd49",
			denom_units: [
				{
					aliases: ["dhk"],
					denom:
						"cw20:juno1tdjwrqmnztn2j3sj2ln9xnyps5hs48q3ddwjrz7jpv6mskappjys5czd49",
					exponent: 0
				}
			],
			description: "The DAO token to build consensus among Hong Kong People",
			display: "dhk",
			images: [
				{
					png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/dhk.png",
					svg: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/dhk.svg"
				}
			],
			logo_URIs: {
				png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/dhk.png",
				svg: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/dhk.svg"
			},
			name: "DHK",
			symbol: "DHK",
			type_asset: "cw20"
		},
		{
			address:
				"juno15u3dt79t6sxxa3x3kpkhzsy56edaa5a66wvt3kxmukqjz2sx0hes5sn38g",
			base: "cw20:juno15u3dt79t6sxxa3x3kpkhzsy56edaa5a66wvt3kxmukqjz2sx0hes5sn38g",
			coingecko_id: "junoswap-raw-dao",
			denom_units: [
				{
					denom:
						"cw20:juno15u3dt79t6sxxa3x3kpkhzsy56edaa5a66wvt3kxmukqjz2sx0hes5sn38g",
					exponent: 0
				},
				{
					denom: "raw",
					exponent: 6
				}
			],
			description: "Token governance for Junoswap",
			display: "raw",
			images: [
				{
					png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/raw.png",
					svg: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/raw.svg"
				}
			],
			logo_URIs: {
				png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/raw.png",
				svg: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/raw.svg"
			},
			name: "JunoSwap",
			symbol: "RAW",
			type_asset: "cw20"
		},
		{
			address:
				"juno17wzaxtfdw5em7lc94yed4ylgjme63eh73lm3lutp2rhcxttyvpwsypjm4w",
			base: "cw20:juno17wzaxtfdw5em7lc94yed4ylgjme63eh73lm3lutp2rhcxttyvpwsypjm4w",
			denom_units: [
				{
					denom:
						"cw20:juno17wzaxtfdw5em7lc94yed4ylgjme63eh73lm3lutp2rhcxttyvpwsypjm4w",
					exponent: 0
				},
				{
					denom: "asvt",
					exponent: 6
				}
			],
			description:
				"Profit sharing token for Another.Software validator. Hold and receive dividends from Another.Software validator commissions!",
			display: "asvt",
			images: [
				{
					png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/asvt.png"
				}
			],
			logo_URIs: {
				png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/asvt.png"
			},
			name: "Another.Software Validator Token",
			symbol: "ASVT",
			type_asset: "cw20"
		},
		{
			address:
				"juno1ur4jx0sxchdevahep7fwq28yk4tqsrhshdtylz46yka3uf6kky5qllqp4k",
			base: "cw20:juno1ur4jx0sxchdevahep7fwq28yk4tqsrhshdtylz46yka3uf6kky5qllqp4k",
			denom_units: [
				{
					denom:
						"cw20:juno1ur4jx0sxchdevahep7fwq28yk4tqsrhshdtylz46yka3uf6kky5qllqp4k",
					exponent: 0
				},
				{
					denom: "hns",
					exponent: 6
				}
			],
			description:
				"IBC HNS is HNS, coin of Handshake, decentralized root namesystem, but wrapped to cosmos for IBC support by Another.Software through Juno network.",
			display: "hns",
			images: [
				{
					svg: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hns.svg"
				}
			],
			logo_URIs: {
				svg: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hns.svg"
			},
			name: "IBC HNS (Handshake)",
			symbol: "HNS",
			type_asset: "cw20"
		},
		{
			address:
				"juno1n7n7d5088qlzlj37e9mgmkhx6dfgtvt02hqxq66lcap4dxnzdhwqfmgng3",
			base: "cw20:juno1n7n7d5088qlzlj37e9mgmkhx6dfgtvt02hqxq66lcap4dxnzdhwqfmgng3",
			denom_units: [
				{
					denom:
						"cw20:juno1n7n7d5088qlzlj37e9mgmkhx6dfgtvt02hqxq66lcap4dxnzdhwqfmgng3",
					exponent: 0
				},
				{
					denom: "joe",
					exponent: 6
				}
			],
			description: "DAO dedicated to building tools on the Juno Network",
			display: "joe",
			images: [
				{
					png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/joe.png"
				}
			],
			logo_URIs: {
				png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/joe.png"
			},
			name: "JoeDAO",
			symbol: "JOE",
			type_asset: "cw20"
		},
		{
			address:
				"juno1sfwye65qxcfsc837gu5qcprcz7w49gkv3wnat04764ld76hy3arqs779tr",
			base: "cw20:juno1sfwye65qxcfsc837gu5qcprcz7w49gkv3wnat04764ld76hy3arqs779tr",
			denom_units: [
				{
					denom:
						"cw20:juno1sfwye65qxcfsc837gu5qcprcz7w49gkv3wnat04764ld76hy3arqs779tr",
					exponent: 0
				},
				{
					denom: "dla",
					exponent: 6
				}
			],
			description: "Governance Token for Digital Land Acquisition DAO",
			display: "dla",
			images: [
				{
					png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/dla.png",
					svg: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/dla.svg"
				}
			],
			logo_URIs: {
				png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/dla.png",
				svg: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/dla.svg"
			},
			name: "Digital Land Acquisition DAO",
			symbol: "DLA",
			type_asset: "cw20"
		},
		{
			address:
				"juno1j0a9ymgngasfn3l5me8qpd53l5zlm9wurfdk7r65s5mg6tkxal3qpgf5se",
			base: "cw20:juno1j0a9ymgngasfn3l5me8qpd53l5zlm9wurfdk7r65s5mg6tkxal3qpgf5se",
			denom_units: [
				{
					denom:
						"cw20:juno1j0a9ymgngasfn3l5me8qpd53l5zlm9wurfdk7r65s5mg6tkxal3qpgf5se",
					exponent: 0
				},
				{
					denom: "glto",
					exponent: 6
				}
			],
			description: "DeFi gaming platform built on Juno",
			display: "glto",
			images: [
				{
					png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/glto.png",
					svg: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/glto.svg"
				}
			],
			logo_URIs: {
				png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/glto.png",
				svg: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/glto.svg"
			},
			name: "Gelotto",
			symbol: "GLTO",
			type_asset: "cw20"
		},
		{
			address:
				"juno1gz8cf86zr4vw9cjcyyv432vgdaecvr9n254d3uwwkx9rermekddsxzageh",
			base: "cw20:juno1gz8cf86zr4vw9cjcyyv432vgdaecvr9n254d3uwwkx9rermekddsxzageh",
			denom_units: [
				{
					denom:
						"cw20:juno1gz8cf86zr4vw9cjcyyv432vgdaecvr9n254d3uwwkx9rermekddsxzageh",
					exponent: 0
				},
				{
					denom: "gkey",
					exponent: 6
				}
			],
			description: "Gelotto Year 1 Grand Prize Token",
			display: "gkey",
			images: [
				{
					png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/gkey.png",
					svg: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/gkey.svg"
				}
			],
			logo_URIs: {
				png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/gkey.png",
				svg: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/gkey.svg"
			},
			name: "GKey",
			symbol: "GKEY",
			type_asset: "cw20"
		},
		{
			address:
				"juno1t46z6hg8vvsena7sue0vg6w85ljar3cundplkre9sz0skeqkap9sxyyy6m",
			base: "cw20:juno1t46z6hg8vvsena7sue0vg6w85ljar3cundplkre9sz0skeqkap9sxyyy6m",
			denom_units: [
				{
					denom:
						"cw20:juno1t46z6hg8vvsena7sue0vg6w85ljar3cundplkre9sz0skeqkap9sxyyy6m",
					exponent: 0
				},
				{
					denom: "hole",
					exponent: 6
				}
			],
			description: "The native token cw20 for BlackHole on Juno Chain",
			display: "hole",
			images: [
				{
					png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hole.png",
					svg: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hole.svg"
				}
			],
			logo_URIs: {
				png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hole.png",
				svg: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hole.svg"
			},
			name: "BlackHole",
			symbol: "HOLE",
			type_asset: "cw20"
		},
		{
			address:
				"juno1dd0k0um5rqncfueza62w9sentdfh3ec4nw4aq4lk5hkjl63vljqscth9gv",
			base: "cw20:juno1dd0k0um5rqncfueza62w9sentdfh3ec4nw4aq4lk5hkjl63vljqscth9gv",
			coingecko_id: "stakeeasy-juno-derivative",
			denom_units: [
				{
					denom:
						"cw20:juno1dd0k0um5rqncfueza62w9sentdfh3ec4nw4aq4lk5hkjl63vljqscth9gv",
					exponent: 0
				},
				{
					denom: "sejuno",
					exponent: 6
				}
			],
			description: "Staking derivative seJUNO for staked JUNO",
			display: "sejuno",
			images: [
				{
					png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sejuno.png",
					svg: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sejuno.svg"
				}
			],
			logo_URIs: {
				png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sejuno.png",
				svg: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sejuno.svg"
			},
			name: "StakeEasy seJUNO",
			symbol: "SEJUNO",
			type_asset: "cw20"
		},
		{
			address:
				"juno1wwnhkagvcd3tjz6f8vsdsw5plqnw8qy2aj3rrhqr2axvktzv9q2qz8jxn3",
			base: "cw20:juno1wwnhkagvcd3tjz6f8vsdsw5plqnw8qy2aj3rrhqr2axvktzv9q2qz8jxn3",
			coingecko_id: "stakeeasy-bjuno",
			denom_units: [
				{
					denom:
						"cw20:juno1wwnhkagvcd3tjz6f8vsdsw5plqnw8qy2aj3rrhqr2axvktzv9q2qz8jxn3",
					exponent: 0
				},
				{
					denom: "bjuno",
					exponent: 6
				}
			],
			description: "Staking derivative bJUNO for staked JUNO",
			display: "bjuno",
			images: [
				{
					png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/bjuno.png",
					svg: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/bjuno.svg"
				}
			],
			logo_URIs: {
				png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/bjuno.png",
				svg: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/bjuno.svg"
			},
			name: "StakeEasy bJUNO",
			symbol: "BJUNO",
			type_asset: "cw20"
		},
		{
			address:
				"juno159q8t5g02744lxq8lfmcn6f78qqulq9wn3y9w7lxjgkz4e0a6kvsfvapse",
			base: "cw20:juno159q8t5g02744lxq8lfmcn6f78qqulq9wn3y9w7lxjgkz4e0a6kvsfvapse",
			denom_units: [
				{
					denom:
						"cw20:juno159q8t5g02744lxq8lfmcn6f78qqulq9wn3y9w7lxjgkz4e0a6kvsfvapse",
					exponent: 0
				},
				{
					denom: "solar",
					exponent: 6
				}
			],
			description:
				"Solarbank DAO Governance Token for speeding up the shift to renewable and green energy",
			display: "solar",
			images: [
				{
					png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/solar.png",
					svg: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/solar.svg"
				}
			],
			logo_URIs: {
				png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/solar.png",
				svg: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/solar.svg"
			},
			name: "Solarbank DAO",
			symbol: "SOLAR",
			type_asset: "cw20"
		},
		{
			address:
				"juno19rqljkh95gh40s7qdx40ksx3zq5tm4qsmsrdz9smw668x9zdr3lqtg33mf",
			base: "cw20:juno19rqljkh95gh40s7qdx40ksx3zq5tm4qsmsrdz9smw668x9zdr3lqtg33mf",
			denom_units: [
				{
					denom:
						"cw20:juno19rqljkh95gh40s7qdx40ksx3zq5tm4qsmsrdz9smw668x9zdr3lqtg33mf",
					exponent: 0
				},
				{
					denom: "seasy",
					exponent: 6
				}
			],
			description: "StakeEasy governance token",
			display: "seasy",
			images: [
				{
					png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/seasy.png",
					svg: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/seasy.svg"
				}
			],
			logo_URIs: {
				png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/seasy.png",
				svg: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/seasy.svg"
			},
			name: "StakeEasy SEASY",
			symbol: "SEASY",
			type_asset: "cw20"
		},
		{
			address:
				"juno1p8x807f6h222ur0vssqy3qk6mcpa40gw2pchquz5atl935t7kvyq894ne3",
			base: "cw20:juno1p8x807f6h222ur0vssqy3qk6mcpa40gw2pchquz5atl935t7kvyq894ne3",
			denom_units: [
				{
					denom:
						"cw20:juno1p8x807f6h222ur0vssqy3qk6mcpa40gw2pchquz5atl935t7kvyq894ne3",
					exponent: 0
				},
				{
					denom: "muse",
					exponent: 6
				}
			],
			description: "The native token cw20 for MuseDAO on Juno Chain",
			display: "muse",
			images: [
				{
					png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/muse.png"
				}
			],
			logo_URIs: {
				png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/muse.png"
			},
			name: "MuseDAO",
			symbol: "MUSE",
			type_asset: "cw20"
		},
		{
			address:
				"juno1qsrercqegvs4ye0yqg93knv73ye5dc3prqwd6jcdcuj8ggp6w0us66deup",
			base: "cw20:juno1qsrercqegvs4ye0yqg93knv73ye5dc3prqwd6jcdcuj8ggp6w0us66deup",
			coingecko_id: "loop",
			denom_units: [
				{
					denom:
						"cw20:juno1qsrercqegvs4ye0yqg93knv73ye5dc3prqwd6jcdcuj8ggp6w0us66deup",
					exponent: 0
				},
				{
					denom: "loop",
					exponent: 6
				}
			],
			description: "The native token cw20 for Loop Finance on Juno Chain",
			display: "loop",
			images: [
				{
					png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/loop.png"
				}
			],
			logo_URIs: {
				png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/loop.png"
			},
			name: "Loop Finance",
			symbol: "LOOP",
			type_asset: "cw20"
		},
		{
			address:
				"juno1cltgm8v842gu54srmejewghnd6uqa26lzkpa635wzra9m9xuudkqa2gtcz",
			base: "cw20:juno1cltgm8v842gu54srmejewghnd6uqa26lzkpa635wzra9m9xuudkqa2gtcz",
			coingecko_id: "fanfury",
			denom_units: [
				{
					denom:
						"cw20:juno1cltgm8v842gu54srmejewghnd6uqa26lzkpa635wzra9m9xuudkqa2gtcz",
					exponent: 0
				},
				{
					denom: "fury",
					exponent: 6
				}
			],
			description: "The native token cw20 for Fanfury on Juno Chain",
			display: "fury",
			images: [
				{
					png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/fanfury.png"
				}
			],
			logo_URIs: {
				png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/fanfury.png"
			},
			name: "Fanfury",
			symbol: "FURY",
			type_asset: "cw20"
		},
		{
			address:
				"juno1rws84uz7969aaa7pej303udhlkt3j9ca0l3egpcae98jwak9quzq8szn2l",
			base: "cw20:juno1rws84uz7969aaa7pej303udhlkt3j9ca0l3egpcae98jwak9quzq8szn2l",
			coingecko_id: "posthuman",
			denom_units: [
				{
					denom:
						"cw20:juno1rws84uz7969aaa7pej303udhlkt3j9ca0l3egpcae98jwak9quzq8szn2l",
					exponent: 0
				},
				{
					denom: "phmn",
					exponent: 6
				}
			],
			description: "The native token cw20 for PHMN on Juno Chain",
			display: "phmn",
			images: [
				{
					png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/phmn.png",
					svg: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/phmn.svg"
				}
			],
			logo_URIs: {
				png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/phmn.png",
				svg: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/phmn.svg"
			},
			name: "POSTHUMAN",
			symbol: "PHMN",
			type_asset: "cw20"
		},
		{
			address:
				"juno1u45shlp0q4gcckvsj06ss4xuvsu0z24a0d0vr9ce6r24pht4e5xq7q995n",
			base: "cw20:juno1u45shlp0q4gcckvsj06ss4xuvsu0z24a0d0vr9ce6r24pht4e5xq7q995n",
			coingecko_id: "hopers-io ",
			denom_units: [
				{
					denom:
						"cw20:juno1u45shlp0q4gcckvsj06ss4xuvsu0z24a0d0vr9ce6r24pht4e5xq7q995n",
					exponent: 0
				},
				{
					denom: "hopers",
					exponent: 6
				}
			],
			description: "The native token cw20 for Hopers on Juno Chain",
			display: "hopers",
			images: [
				{
					png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hopers.png",
					svg: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hopers.svg"
				}
			],
			logo_URIs: {
				png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hopers.png",
				svg: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hopers.svg"
			},
			name: "Hopers",
			symbol: "HOPERS",
			type_asset: "cw20"
		},
		{
			address:
				"juno1g647t78y2ulqlm3lss8rs3d0spzd0teuwhdvnqn92tr79yltk9dq2h24za",
			base: "cw20:juno1g647t78y2ulqlm3lss8rs3d0spzd0teuwhdvnqn92tr79yltk9dq2h24za",
			denom_units: [
				{
					denom:
						"cw20:juno1g647t78y2ulqlm3lss8rs3d0spzd0teuwhdvnqn92tr79yltk9dq2h24za",
					exponent: 0
				},
				{
					denom: "red",
					exponent: 6
				}
			],
			description: "RED",
			display: "red",
			images: [
				{
					png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/red.png"
				}
			],
			logo_URIs: {
				png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/red.png"
			},
			name: "Red",
			symbol: "RED",
			type_asset: "cw20"
		},
		{
			address:
				"juno14q8kk464fafql2fwmlsgvgcdl6h2csqpzv4hr025fmcvgjahpess32k0j7",
			base: "cw20:juno14q8kk464fafql2fwmlsgvgcdl6h2csqpzv4hr025fmcvgjahpess32k0j7",
			denom_units: [
				{
					denom:
						"cw20:juno14q8kk464fafql2fwmlsgvgcdl6h2csqpzv4hr025fmcvgjahpess32k0j7",
					exponent: 0
				},
				{
					denom: "blue",
					exponent: 6
				}
			],
			description: "BLUE",
			display: "blue",
			images: [
				{
					png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/blue.png"
				}
			],
			logo_URIs: {
				png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/blue.png"
			},
			name: "Blue",
			symbol: "BLUE",
			type_asset: "cw20"
		},
		{
			address:
				"juno1mkw83sv6c7sjdvsaplrzc8yaes9l42p4mhy0ssuxjnyzl87c9eps7ce3m9",
			base: "cw20:juno1mkw83sv6c7sjdvsaplrzc8yaes9l42p4mhy0ssuxjnyzl87c9eps7ce3m9",
			coingecko_id: "wynd",
			denom_units: [
				{
					denom:
						"cw20:juno1mkw83sv6c7sjdvsaplrzc8yaes9l42p4mhy0ssuxjnyzl87c9eps7ce3m9",
					exponent: 0
				},
				{
					denom: "wynd",
					exponent: 6
				}
			],
			description: "WYND DAO Governance Token",
			display: "wynd",
			images: [
				{
					png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/wynd.png",
					svg: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/wynd.svg"
				}
			],
			logo_URIs: {
				png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/wynd.png",
				svg: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/wynd.svg"
			},
			name: "Wynd DAO Governance Token",
			symbol: "WYND",
			type_asset: "cw20"
		},
		{
			address:
				"juno1s2dp05rspeuzzpzyzdchk262szehrtfpz847uvf98cnwh53ulx4qg20qwj",
			base: "juno1s2dp05rspeuzzpzyzdchk262szehrtfpz847uvf98cnwh53ulx4qg20qwj",
			denom_units: [
				{
					denom:
						"cw20:juno1s2dp05rspeuzzpzyzdchk262szehrtfpz847uvf98cnwh53ulx4qg20qwj",
					exponent: 0
				},
				{
					denom: "banana",
					exponent: 6
				}
			],
			description: "Bored APE IBC club token",
			display: "banana",
			images: [
				{
					png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/banana.png"
				}
			],
			logo_URIs: {
				png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/banana.png"
			},
			name: "Banana Token",
			symbol: "BANANA",
			type_asset: "cw20"
		},
		{
			address:
				"juno1qmlchtmjpvu0cr7u0tad2pq8838h6farrrjzp39eqa9xswg7teussrswlq",
			base: "cw20:juno1qmlchtmjpvu0cr7u0tad2pq8838h6farrrjzp39eqa9xswg7teussrswlq",
			denom_units: [
				{
					denom:
						"cw20:juno1qmlchtmjpvu0cr7u0tad2pq8838h6farrrjzp39eqa9xswg7teussrswlq",
					exponent: 0
				},
				{
					denom: "nride",
					exponent: 6
				}
			],
			description: "nRide Token",
			display: "nride",
			images: [
				{
					png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/nride.png",
					svg: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/nride.svg"
				}
			],
			logo_URIs: {
				png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/nride.png",
				svg: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/nride.svg"
			},
			name: "nRide Token",
			symbol: "NRIDE",
			type_asset: "cw20"
		},
		{
			address:
				"juno14lycavan8gvpjn97aapzvwmsj8kyrvf644p05r0hu79namyj3ens87650k",
			base: "cw20:juno14lycavan8gvpjn97aapzvwmsj8kyrvf644p05r0hu79namyj3ens87650k",
			denom_units: [
				{
					denom:
						"cw20:juno14lycavan8gvpjn97aapzvwmsj8kyrvf644p05r0hu79namyj3ens87650k",
					exponent: 0
				},
				{
					denom: "sgnl",
					exponent: 6
				}
			],
			description: "Signal Art and Gaming on Juno",
			display: "sgnl",
			images: [
				{
					png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sgnl.png"
				}
			],
			logo_URIs: {
				png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sgnl.png"
			},
			name: "Signal",
			symbol: "SGNL",
			type_asset: "cw20"
		},
		{
			address:
				"juno1zkwveux7y6fmsr88atf3cyffx96p0c96qr8tgcsj7vfnhx7sal3s3zu3ps",
			base: "cw20:juno1zkwveux7y6fmsr88atf3cyffx96p0c96qr8tgcsj7vfnhx7sal3s3zu3ps",
			denom_units: [
				{
					denom:
						"cw20:juno1zkwveux7y6fmsr88atf3cyffx96p0c96qr8tgcsj7vfnhx7sal3s3zu3ps",
					exponent: 0
				},
				{
					denom: "jape",
					exponent: 6
				}
			],
			description:
				"Governance and utility token for the Junø Apes NFT platform on Juno",
			display: "jape",
			images: [
				{
					png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/jape.png"
				}
			],
			logo_URIs: {
				png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/jape.png"
			},
			name: "Junø Apes",
			symbol: "JAPE",
			type_asset: "cw20"
		},
		{
			address:
				"juno12wxyvtqe76x2a5jj6ckp2hfq8v32m6rvyyxwwufl2tksqvkt7whqczv6pa",
			base: "cw20:juno12wxyvtqe76x2a5jj6ckp2hfq8v32m6rvyyxwwufl2tksqvkt7whqczv6pa",
			denom_units: [
				{
					denom:
						"cw20:juno12wxyvtqe76x2a5jj6ckp2hfq8v32m6rvyyxwwufl2tksqvkt7whqczv6pa",
					exponent: 0
				},
				{
					denom: "catom",
					exponent: 6
				}
			],
			description:
				"A community meme token with a fantasy fiction storyline and comic based NFTs on Juno",
			display: "catom",
			images: [
				{
					png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/catom.png"
				}
			],
			logo_URIs: {
				png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/catom.png"
			},
			name: "Catom",
			symbol: "CATOM",
			type_asset: "cw20"
		},
		{
			address:
				"juno1g0wuyu2f49ncf94r65278puxzclf5arse9f3kvffxyv4se4vgdmsk4dvqz",
			base: "cw20:juno1g0wuyu2f49ncf94r65278puxzclf5arse9f3kvffxyv4se4vgdmsk4dvqz",
			denom_units: [
				{
					denom:
						"cw20:juno1g0wuyu2f49ncf94r65278puxzclf5arse9f3kvffxyv4se4vgdmsk4dvqz",
					exponent: 0
				},
				{
					denom: "howl",
					exponent: 6
				}
			],
			description:
				"Utility token of Howl.social, an on chain micro-blogging platform on Juno",
			display: "howl",
			images: [
				{
					png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/howl.png"
				}
			],
			logo_URIs: {
				png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/howl.png"
			},
			name: "Howl",
			symbol: "HOWL",
			type_asset: "cw20"
		},
		{
			address:
				"juno1u8cr3hcjvfkzxcaacv9q75uw9hwjmn8pucc93pmy6yvkzz79kh3qncca8x",
			base: "cw20:juno1u8cr3hcjvfkzxcaacv9q75uw9hwjmn8pucc93pmy6yvkzz79kh3qncca8x",
			denom_units: [
				{
					denom:
						"cw20:juno1u8cr3hcjvfkzxcaacv9q75uw9hwjmn8pucc93pmy6yvkzz79kh3qncca8x",
					exponent: 0
				},
				{
					denom: "fox",
					exponent: 6
				}
			],
			description:
				"Inspired by Bonk. A community project to celebrate the settlers of JunoNetwork.",
			display: "fox",
			images: [
				{
					png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/fox.png"
				}
			],
			logo_URIs: {
				png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/fox.png"
			},
			name: "Juno Fox",
			symbol: "FOX",
			type_asset: "cw20"
		},
		{
			address:
				"juno1xekkh27punj0uxruv3gvuydyt856fax0nu750xns99t2qcxp7xmsqwhfma",
			base: "cw20:juno1xekkh27punj0uxruv3gvuydyt856fax0nu750xns99t2qcxp7xmsqwhfma",
			denom_units: [
				{
					denom:
						"cw20:juno1xekkh27punj0uxruv3gvuydyt856fax0nu750xns99t2qcxp7xmsqwhfma",
					exponent: 0
				},
				{
					denom: "grdn",
					exponent: 6
				}
			],
			description: "Evmos Guardians governance token.",
			display: "grdn",
			images: [
				{
					png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/guardian.png"
				}
			],
			logo_URIs: {
				png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/guardian.png"
			},
			name: "Guardian",
			symbol: "GRDN",
			type_asset: "cw20"
		},
		{
			address:
				"juno166heaxlyntd33a5euh4rrz26svhean4klzw594esmd02l4atan6sazy2my",
			base: "cw20:juno166heaxlyntd33a5euh4rrz26svhean4klzw594esmd02l4atan6sazy2my",
			denom_units: [
				{
					denom:
						"cw20:juno166heaxlyntd33a5euh4rrz26svhean4klzw594esmd02l4atan6sazy2my",
					exponent: 0
				},
				{
					denom: "mnpu",
					exponent: 6
				}
			],
			description: "Mini Punks Token",
			display: "mnpu",
			images: [
				{
					png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/mnpu.png",
					svg: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/mnpu.svg"
				}
			],
			logo_URIs: {
				png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/mnpu.png",
				svg: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/mnpu.svg"
			},
			name: "Mini Punks",
			symbol: "MNPU",
			type_asset: "cw20"
		},
		{
			address:
				"juno10gthz5ufgrpuk5cscve2f0hjp56wgp90psqxcrqlg4m9mcu9dh8q4864xy",
			base: "cw20:juno10gthz5ufgrpuk5cscve2f0hjp56wgp90psqxcrqlg4m9mcu9dh8q4864xy",
			denom_units: [
				{
					denom:
						"cw20:juno10gthz5ufgrpuk5cscve2f0hjp56wgp90psqxcrqlg4m9mcu9dh8q4864xy",
					exponent: 0
				},
				{
					denom: "kleo",
					exponent: 6
				}
			],
			description: "Kleomedes Token",
			display: "kleo",
			images: [
				{
					png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/kleomedes.png"
				}
			],
			logo_URIs: {
				png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/kleomedes.png"
			},
			name: "Kleomedes",
			symbol: "KLEO",
			type_asset: "cw20"
		},
		{
			address:
				"juno1qqwf3lkfjhp77yja7gmg3y95pda0e5xctqrdhf3wvwdd79flagvqfgrgxp",
			base: "cw20:juno1qqwf3lkfjhp77yja7gmg3y95pda0e5xctqrdhf3wvwdd79flagvqfgrgxp",
			denom_units: [
				{
					denom:
						"cw20:juno1qqwf3lkfjhp77yja7gmg3y95pda0e5xctqrdhf3wvwdd79flagvqfgrgxp",
					exponent: 0
				},
				{
					denom: "sikoba",
					exponent: 6
				}
			],
			description: "Sikoba Governance Token",
			display: "sikoba",
			images: [
				{
					png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sikoba.png",
					svg: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sikoba.svg"
				}
			],
			logo_URIs: {
				png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sikoba.png",
				svg: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sikoba.svg"
			},
			name: "Sikoba Token",
			symbol: "SKOJ",
			type_asset: "cw20"
		},
		{
			address:
				"juno1x5qt47rw84c4k6xvvywtrd40p8gxjt8wnmlahlqg07qevah3f8lqwxfs7z",
			base: "cw20:juno1x5qt47rw84c4k6xvvywtrd40p8gxjt8wnmlahlqg07qevah3f8lqwxfs7z",
			denom_units: [
				{
					denom:
						"cw20:juno1x5qt47rw84c4k6xvvywtrd40p8gxjt8wnmlahlqg07qevah3f8lqwxfs7z",
					exponent: 0
				},
				{
					denom: "shibac",
					exponent: 6
				}
			],
			description: "Shiba Cosmos",
			display: "shibac",
			images: [
				{
					png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/shibacosmos.png"
				}
			],
			logo_URIs: {
				png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/shibacosmos.png"
			},
			name: "ShibaCosmos",
			symbol: "SHIBAC",
			type_asset: "cw20"
		},
		{
			address:
				"juno1ngww7zxak55fql42wmyqrr4rhzpne24hhs4p3w4cwhcdgqgr3hxsmzl9zg",
			base: "cw20:juno1ngww7zxak55fql42wmyqrr4rhzpne24hhs4p3w4cwhcdgqgr3hxsmzl9zg",
			denom_units: [
				{
					denom:
						"cw20:juno1ngww7zxak55fql42wmyqrr4rhzpne24hhs4p3w4cwhcdgqgr3hxsmzl9zg",
					exponent: 0
				},
				{
					denom: "clst",
					exponent: 6
				}
			],
			description: "Celestims",
			display: "clst",
			images: [
				{
					png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/celestims.png"
				}
			],
			logo_URIs: {
				png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/celestims.png"
			},
			name: "Celestims",
			symbol: "CLST",
			type_asset: "cw20"
		},
		{
			address:
				"juno1m4h8q4p305wgy7vkux0w6e5ylhqll3s6pmadhxkhqtuwd5wlxhxs8xklsw",
			base: "cw20:juno1m4h8q4p305wgy7vkux0w6e5ylhqll3s6pmadhxkhqtuwd5wlxhxs8xklsw",
			denom_units: [
				{
					denom:
						"cw20:juno1m4h8q4p305wgy7vkux0w6e5ylhqll3s6pmadhxkhqtuwd5wlxhxs8xklsw",
					exponent: 0
				},
				{
					denom: "watr",
					exponent: 6
				}
			],
			description:
				"A revolutionary DAO created to bring clean drinking water to men, women, and children worldwide. We hope you join us on our journey!",
			display: "watr",
			images: [
				{
					png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/watr.png"
				}
			],
			logo_URIs: {
				png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/watr.png"
			},
			name: "WATR",
			symbol: "WATR",
			type_asset: "cw20"
		},
		{
			address:
				"juno1ju8k8sqwsqu5k6umrypmtyqu2wqcpnrkf4w4mntvl0javt4nma7s8lzgss",
			base: "cw20:juno1ju8k8sqwsqu5k6umrypmtyqu2wqcpnrkf4w4mntvl0javt4nma7s8lzgss",
			denom_units: [
				{
					denom:
						"cw20:juno1ju8k8sqwsqu5k6umrypmtyqu2wqcpnrkf4w4mntvl0javt4nma7s8lzgss",
					exponent: 0
				},
				{
					denom: "casa",
					exponent: 6
				}
			],
			description: "An innovative DAO dedicated to housing the most vulnerable",
			display: "casa",
			images: [
				{
					png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/casa.png"
				}
			],
			logo_URIs: {
				png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/casa.png"
			},
			name: "Casa",
			symbol: "CASA",
			type_asset: "cw20"
		},
		{
			address:
				"juno1j4ux0f6gt7e82z7jdpm25v4g2gts880ap64rdwa49989wzhd0dfqed6vqm",
			base: "cw20:juno1j4ux0f6gt7e82z7jdpm25v4g2gts880ap64rdwa49989wzhd0dfqed6vqm",
			denom_units: [
				{
					denom:
						"cw20:juno1j4ux0f6gt7e82z7jdpm25v4g2gts880ap64rdwa49989wzhd0dfqed6vqm",
					exponent: 0
				},
				{
					denom: "summit",
					exponent: 6
				}
			],
			description:
				"Social Impact DAO providing showers, meals, and vehicles to the homeless",
			display: "summit",
			images: [
				{
					png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/summit.png"
				}
			],
			logo_URIs: {
				png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/summit.png"
			},
			name: "Summit",
			symbol: "SUMMIT",
			type_asset: "cw20"
		},
		{
			address:
				"juno13ca2g36ng6etcfhr9qxx352uw2n5e92np54thfkm3w3nzlhsgvwsjaqlyq",
			base: "cw20:juno13ca2g36ng6etcfhr9qxx352uw2n5e92np54thfkm3w3nzlhsgvwsjaqlyq",
			denom_units: [
				{
					denom:
						"cw20:juno13ca2g36ng6etcfhr9qxx352uw2n5e92np54thfkm3w3nzlhsgvwsjaqlyq",
					exponent: 0
				},
				{
					denom: "manna",
					exponent: 6
				}
			],
			description:
				"Social Impact DAO dedicated to combatting food insecurity and malnutrition",
			display: "manna",
			images: [
				{
					png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/manna.png"
				}
			],
			logo_URIs: {
				png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/manna.png"
			},
			name: "Manna",
			symbol: "MANNA",
			type_asset: "cw20"
		},
		{
			address:
				"juno12etxwkxvms0uy9ak8g3pyq6a53myukufdnx82pakzmjmpm77a0ksr9gs5v",
			base: "cw20:juno12etxwkxvms0uy9ak8g3pyq6a53myukufdnx82pakzmjmpm77a0ksr9gs5v",
			denom_units: [
				{
					denom:
						"cw20:juno12etxwkxvms0uy9ak8g3pyq6a53myukufdnx82pakzmjmpm77a0ksr9gs5v",
					exponent: 0
				},
				{
					denom: "empwr",
					exponent: 6
				}
			],
			description: "Social Impact DAO focused on youth empowerment",
			display: "empwr",
			images: [
				{
					png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/empwr.png"
				}
			],
			logo_URIs: {
				png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/empwr.png"
			},
			name: "EMPWR",
			symbol: "EMPWR",
			type_asset: "cw20"
		},
		{
			address:
				"juno1525fuspletvzykpgr2atxpymu9le4mghd7qq4a4u23uwqzc2f3fq7fmafd",
			base: "cw20:juno1525fuspletvzykpgr2atxpymu9le4mghd7qq4a4u23uwqzc2f3fq7fmafd",
			denom_units: [
				{
					denom:
						"cw20:juno1525fuspletvzykpgr2atxpymu9le4mghd7qq4a4u23uwqzc2f3fq7fmafd",
					exponent: 0
				},
				{
					denom: "middle",
					exponent: 6
				}
			],
			description: "Join us in fighting against world hunger",
			display: "middle",
			images: [
				{
					png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/middle.png"
				}
			],
			logo_URIs: {
				png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/middle.png"
			},
			name: "Middle",
			symbol: "MIDDLE",
			type_asset: "cw20"
		},
		{
			address:
				"juno17703kcxtsg37hryxnestejyyycuv5yyvnghp2e7w0kqvafnnyetsgzq62w",
			base: "cw20:juno17703kcxtsg37hryxnestejyyycuv5yyvnghp2e7w0kqvafnnyetsgzq62w",
			denom_units: [
				{
					denom:
						"cw20:juno17703kcxtsg37hryxnestejyyycuv5yyvnghp2e7w0kqvafnnyetsgzq62w",
					exponent: 0
				},
				{
					denom: "sunset",
					exponent: 6
				}
			],
			description:
				"Social Impact DAO taking a wholistic approach to helping abused and mentally ill women and children",
			display: "sunset",
			images: [
				{
					png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sunset.png"
				}
			],
			logo_URIs: {
				png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sunset.png"
			},
			name: "Sunset",
			symbol: "SUNSET",
			type_asset: "cw20"
		},
		{
			address:
				"juno1uu3rxu7w7fpfj4sl4xpxppgymk57mzdzn6kg7492jdxh5dwk7d2qq9429e",
			base: "cw20:juno1uu3rxu7w7fpfj4sl4xpxppgymk57mzdzn6kg7492jdxh5dwk7d2qq9429e",
			denom_units: [
				{
					denom:
						"cw20:juno1uu3rxu7w7fpfj4sl4xpxppgymk57mzdzn6kg7492jdxh5dwk7d2qq9429e",
					exponent: 0
				},
				{
					denom: "tree",
					exponent: 6
				}
			],
			description:
				"Social Impact DAO dedicated to helping restore and protect our environment",
			display: "tree",
			images: [
				{
					png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/livingtree.png"
				}
			],
			logo_URIs: {
				png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/livingtree.png"
			},
			name: "Living Tree",
			symbol: "TREE",
			type_asset: "cw20"
		},
		{
			address:
				"juno1jwdy7v4egw36pd84aeks3ww6n8k7zhsumd4ac8q5lts83ppxueus4626e8",
			base: "cw20:juno1jwdy7v4egw36pd84aeks3ww6n8k7zhsumd4ac8q5lts83ppxueus4626e8",
			denom_units: [
				{
					denom:
						"cw20:juno1jwdy7v4egw36pd84aeks3ww6n8k7zhsumd4ac8q5lts83ppxueus4626e8",
					exponent: 0
				},
				{
					denom: "invdrs",
					exponent: 6
				}
			],
			description: "Evmos Guardians' Invaders DAO token.",
			display: "invdrs",
			images: [
				{
					png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/invdrs.png"
				}
			],
			logo_URIs: {
				png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/invdrs.png"
			},
			name: "Invaders",
			symbol: "INVDRS",
			type_asset: "cw20"
		},
		{
			address:
				"juno1jrr0tuuzxrrwcg6hgeqhw5wqpck2y55734e7zcrp745aardlp0qqg8jz06",
			base: "cw20:juno1jrr0tuuzxrrwcg6hgeqhw5wqpck2y55734e7zcrp745aardlp0qqg8jz06",
			denom_units: [
				{
					denom:
						"cw20:juno1jrr0tuuzxrrwcg6hgeqhw5wqpck2y55734e7zcrp745aardlp0qqg8jz06",
					exponent: 0
				},
				{
					denom: "apemos",
					exponent: 6
				}
			],
			description: "Apemos",
			display: "apemos",
			images: [
				{
					png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/apemos.png"
				}
			],
			logo_URIs: {
				png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/apemos.png"
			},
			name: "Apemos",
			symbol: "APEMOS",
			type_asset: "cw20"
		},
		{
			address:
				"juno1ytymtllllsp3hfmndvcp802p2xmy5s8m59ufel8xv9ahyxyfs4hs4kd4je",
			base: "cw20:juno1ytymtllllsp3hfmndvcp802p2xmy5s8m59ufel8xv9ahyxyfs4hs4kd4je",
			denom_units: [
				{
					denom:
						"cw20:juno1ytymtllllsp3hfmndvcp802p2xmy5s8m59ufel8xv9ahyxyfs4hs4kd4je",
					exponent: 0
				},
				{
					denom: "osdoge",
					exponent: 6
				}
			],
			description: "The First Doge on Osmosis",
			display: "osdoge",
			images: [
				{
					png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/osdoge.png"
				}
			],
			logo_URIs: {
				png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/osdoge.png"
			},
			name: "Osmosis Doge",
			symbol: "OSDOGE",
			type_asset: "cw20"
		},
		{
			address:
				"juno1k2ruzzvvwwtwny6gq6kcwyfhkzahaunp685wmz4hafplduekj98q9hgs6d",
			base: "cw20:juno1k2ruzzvvwwtwny6gq6kcwyfhkzahaunp685wmz4hafplduekj98q9hgs6d",
			denom_units: [
				{
					denom:
						"cw20:juno1k2ruzzvvwwtwny6gq6kcwyfhkzahaunp685wmz4hafplduekj98q9hgs6d",
					exponent: 0
				},
				{
					denom: "doga",
					exponent: 6
				}
			],
			description: "Doge Apr",
			display: "doga",
			images: [
				{
					png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/doga.png"
				}
			],
			logo_URIs: {
				png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/doga.png"
			},
			name: "Doge Apr",
			symbol: "DOGA",
			type_asset: "cw20"
		},
		{
			address:
				"juno1zqrj3ta4u7ylv0wqzd8t8q3jrr9rdmn43zuzp9zemeunecnhy8fss778g7",
			base: "cw20:juno1zqrj3ta4u7ylv0wqzd8t8q3jrr9rdmn43zuzp9zemeunecnhy8fss778g7",
			denom_units: [
				{
					denom:
						"cw20:juno1zqrj3ta4u7ylv0wqzd8t8q3jrr9rdmn43zuzp9zemeunecnhy8fss778g7",
					exponent: 0
				},
				{
					denom: "pepe",
					exponent: 6
				}
			],
			description: "Osmo Pepe",
			display: "pepe",
			images: [
				{
					png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/pepe.png"
				}
			],
			logo_URIs: {
				png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/pepe.png"
			},
			name: "Osmo Pepe",
			symbol: "PEPE",
			type_asset: "cw20"
		},
		{
			address:
				"juno1f5datjdse3mdgrapwuzs3prl7pvxxht48ns6calnn0t77v2s9l8s0qu488",
			base: "cw20:juno1f5datjdse3mdgrapwuzs3prl7pvxxht48ns6calnn0t77v2s9l8s0qu488",
			denom_units: [
				{
					denom:
						"cw20:juno1f5datjdse3mdgrapwuzs3prl7pvxxht48ns6calnn0t77v2s9l8s0qu488",
					exponent: 0
				},
				{
					denom: "catmos",
					exponent: 6
				}
			],
			description: "Catmos",
			display: "catmos",
			images: [
				{
					png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/catmos.png"
				}
			],
			logo_URIs: {
				png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/catmos.png"
			},
			name: "Catmos",
			symbol: "CATMOS",
			type_asset: "cw20"
		},
		{
			address:
				"juno1dyyf7pxeassxvftf570krv7fdf5r8e4r04mp99h0mllsqzp3rs4q7y8yqg",
			base: "cw20:juno1dyyf7pxeassxvftf570krv7fdf5r8e4r04mp99h0mllsqzp3rs4q7y8yqg",
			denom_units: [
				{
					denom:
						"cw20:juno1dyyf7pxeassxvftf570krv7fdf5r8e4r04mp99h0mllsqzp3rs4q7y8yqg",
					exponent: 0
				},
				{
					denom: "spacer",
					exponent: 6
				}
			],
			description: "Spacer",
			display: "spacer",
			images: [
				{
					png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/spacer.png"
				}
			],
			logo_URIs: {
				png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/spacer.png"
			},
			name: "Spacer",
			symbol: "SPACER",
			type_asset: "cw20"
		},
		{
			address:
				"juno1dpany8c0lj526lsa02sldv7shzvnw5dt5ues72rk35hd69rrydxqeraz8l",
			base: "cw20:juno1dpany8c0lj526lsa02sldv7shzvnw5dt5ues72rk35hd69rrydxqeraz8l",
			denom_units: [
				{
					denom:
						"cw20:juno1dpany8c0lj526lsa02sldv7shzvnw5dt5ues72rk35hd69rrydxqeraz8l",
					exponent: 0
				},
				{
					denom: "light",
					exponent: 9
				}
			],
			description: "Light: LumenX community DAO treasury token",
			display: "light",
			images: [
				{
					png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/light.png"
				}
			],
			logo_URIs: {
				png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/light.png"
			},
			name: "LIGHT",
			symbol: "LIGHT",
			type_asset: "cw20"
		},
		{
			address:
				"juno1llg7q2d5dqlrqzh5dxv8c7kzzjszld34s5vktqmlmaaxqjssz43sxyhq0d",
			base: "cw20:juno1llg7q2d5dqlrqzh5dxv8c7kzzjszld34s5vktqmlmaaxqjssz43sxyhq0d",
			denom_units: [
				{
					denom:
						"cw20:juno1llg7q2d5dqlrqzh5dxv8c7kzzjszld34s5vktqmlmaaxqjssz43sxyhq0d",
					exponent: 0
				},
				{
					denom: "mile",
					exponent: 6
				}
			],
			description: "Mille: the 1000th token on osmosis",
			display: "mile",
			images: [
				{
					png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/mille.png"
				}
			],
			logo_URIs: {
				png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/mille.png"
			},
			name: "Mille",
			symbol: "MILE",
			type_asset: "cw20"
		},
		{
			address:
				"juno1lpvx3mv2a6ddzfjc7zzz2v2cm5gqgqf0hx67hc5p5qwn7hz4cdjsnznhu8",
			base: "cw20:juno1lpvx3mv2a6ddzfjc7zzz2v2cm5gqgqf0hx67hc5p5qwn7hz4cdjsnznhu8",
			denom_units: [
				{
					denom:
						"cw20:juno1lpvx3mv2a6ddzfjc7zzz2v2cm5gqgqf0hx67hc5p5qwn7hz4cdjsnznhu8",
					exponent: 0
				},
				{
					denom: "void",
					exponent: 6
				}
			],
			description: "Void",
			display: "void",
			images: [
				{
					png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/void.png"
				}
			],
			logo_URIs: {
				png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/void.png"
			},
			name: "Void",
			symbol: "VOID",
			type_asset: "cw20"
		},
		{
			address:
				"juno10vgf2u03ufcf25tspgn05l7j3tfg0j63ljgpffy98t697m5r5hmqaw95ux",
			base: "cw20:juno10vgf2u03ufcf25tspgn05l7j3tfg0j63ljgpffy98t697m5r5hmqaw95ux",
			denom_units: [
				{
					denom:
						"cw20:juno10vgf2u03ufcf25tspgn05l7j3tfg0j63ljgpffy98t697m5r5hmqaw95ux",
					exponent: 0
				},
				{
					denom: "silica",
					exponent: 6
				}
			],
			description: "Silica",
			display: "silica",
			images: [
				{
					png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/silica.png"
				}
			],
			logo_URIs: {
				png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/silica.png"
			},
			name: "Silica",
			symbol: "SLCA",
			type_asset: "cw20"
		},
		{
			address:
				"juno1epxnvge53c4hkcmqzlxryw5fp7eae2utyk6ehjcfpwajwp48km3sgxsh9k",
			base: "cw20:juno1epxnvge53c4hkcmqzlxryw5fp7eae2utyk6ehjcfpwajwp48km3sgxsh9k",
			denom_units: [
				{
					denom:
						"cw20:juno1epxnvge53c4hkcmqzlxryw5fp7eae2utyk6ehjcfpwajwp48km3sgxsh9k",
					exponent: 0
				},
				{
					denom: "pepec",
					exponent: 6
				}
			],
			description: "Pepec",
			display: "pepec",
			images: [
				{
					png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/pepec.png"
				}
			],
			logo_URIs: {
				png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/pepec.png"
			},
			name: "Pepec",
			symbol: "PEPEC",
			type_asset: "cw20"
		},
		{
			address:
				"juno15au4k2jgwd0jnchy0fkg3lm00fpt7jt0j2duuzradn2q7sega2dszyn5pp",
			base: "cw20:juno15au4k2jgwd0jnchy0fkg3lm00fpt7jt0j2duuzradn2q7sega2dszyn5pp",
			denom_units: [
				{
					denom:
						"cw20:juno15au4k2jgwd0jnchy0fkg3lm00fpt7jt0j2duuzradn2q7sega2dszyn5pp",
					exponent: 0
				},
				{
					denom: "pltn",
					exponent: 6
				}
			],
			description: "Palantin",
			display: "pltn",
			images: [
				{
					png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/pltn.png"
				}
			],
			logo_URIs: {
				png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/pltn.png"
			},
			name: "Palantin",
			symbol: "PLTN",
			type_asset: "cw20"
		},
		{
			address:
				"juno12mcwmd6wqhledkjsurlfqtc8j0pedvxlcxw3gs4kh2qf808ehehsen8nmw",
			base: "cw20:juno12mcwmd6wqhledkjsurlfqtc8j0pedvxlcxw3gs4kh2qf808ehehsen8nmw",
			denom_units: [
				{
					denom:
						"cw20:juno12mcwmd6wqhledkjsurlfqtc8j0pedvxlcxw3gs4kh2qf808ehehsen8nmw",
					exponent: 0
				},
				{
					denom: "yfd",
					exponent: 6
				}
			],
			description: "Propose. Vote. Build.",
			display: "yfd",
			images: [
				{
					png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/yfd.png",
					svg: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/yfd.svg"
				}
			],
			logo_URIs: {
				png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/yfd.png",
				svg: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/yfd.svg"
			},
			name: "Y-Foundry DAO",
			symbol: "YFD",
			type_asset: "cw20"
		},
		{
			address: "juno1qly4zcmzr2gyxtze5yt9chv2srczwwunppxjfh",
			base: "factory/juno1qly4zcmzr2gyxtze5yt9chv2srczwwunppxjfh/NEXX",
			denom_units: [
				{
					denom: "factory/juno1qly4zcmzr2gyxtze5yt9chv2srczwwunppxjfh/NEXX",
					exponent: 0
				},
				{
					denom: "nexx",
					exponent: 6
				}
			],
			display: "nexx",
			images: [
				{
					png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/nexx.png"
				}
			],
			logo_URIs: {
				png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/nexx.png"
			},
			name: "NEXX GEN AI",
			symbol: "NEXX"
		},
		{
			address: "juno1u805lv20qc6jy7c3ttre7nct6uyl20pfky5r7e",
			base: "factory/juno1u805lv20qc6jy7c3ttre7nct6uyl20pfky5r7e/DGL",
			denom_units: [
				{
					denom: "factory/juno1u805lv20qc6jy7c3ttre7nct6uyl20pfky5r7e/DGL",
					exponent: 0
				},
				{
					denom: "dgl",
					exponent: 6
				}
			],
			display: "dgl",
			images: [
				{
					png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/dgl.png"
				}
			],
			logo_URIs: {
				png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/dgl.png"
			},
			name: "Licorice",
			symbol: "DGL"
		},
		{
			address:
				"juno1a0khag6cfzu5lrwazmyndjgvlsuk7g4vn9jd8ceym8f4jf6v2l9q6d348a",
			base: "cw20:juno1a0khag6cfzu5lrwazmyndjgvlsuk7g4vn9jd8ceym8f4jf6v2l9q6d348a",
			denom_units: [
				{
					denom:
						"cw20:juno1a0khag6cfzu5lrwazmyndjgvlsuk7g4vn9jd8ceym8f4jf6v2l9q6d348a",
					exponent: 0
				},
				{
					denom: "ampJUNO",
					exponent: 6
				}
			],
			description: "ERIS liquid staked JUNO",
			display: "ampJUNO",
			images: [
				{
					svg: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/ampjuno.svg"
				}
			],
			logo_URIs: {
				svg: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/ampjuno.svg"
			},
			name: "ERIS Amplified JUNO",
			symbol: "ampJUNO",
			type_asset: "cw20"
		},
		{
			address:
				"juno14fz92ehqt37e096xr95kmy8nc0kz803uezxtg4fwx7agjjma86sqm8mg3h",
			base: "cw20:juno14fz92ehqt37e096xr95kmy8nc0kz803uezxtg4fwx7agjjma86sqm8mg3h",
			denom_units: [
				{
					denom:
						"cw20:juno14fz92ehqt37e096xr95kmy8nc0kz803uezxtg4fwx7agjjma86sqm8mg3h",
					exponent: 0
				},
				{
					denom: "bits",
					exponent: 8
				}
			],
			description: "BITS - Native token of Bitswift Cash",
			display: "bits",
			images: [
				{
					png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/bits.png"
				}
			],
			logo_URIs: {
				png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/bits.png"
			},
			name: "BITS",
			symbol: "BITS",
			type_asset: "cw20"
		},
		{
			address:
				"juno13epyeat7ef0k7q6kllmyvc8zpfd9xm7cqjrgtk0qkgrk7n5mjfmq8979jw",
			base: "cw20:juno13epyeat7ef0k7q6kllmyvc8zpfd9xm7cqjrgtk0qkgrk7n5mjfmq8979jw",
			denom_units: [
				{
					denom:
						"cw20:juno13epyeat7ef0k7q6kllmyvc8zpfd9xm7cqjrgtk0qkgrk7n5mjfmq8979jw",
					exponent: 0
				},
				{
					denom: "poil",
					exponent: 6
				}
			],
			description:
				"The least memeable memecoin in existence. The cats have had their day, it's time for $POIL coin to take reign.",
			display: "poil",
			images: [
				{
					png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/poil.png"
				}
			],
			logo_URIs: {
				png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/poil.png"
			},
			name: "POIL",
			symbol: "POIL",
			type_asset: "cw20"
		},
		{
			base: "factory/juno195asgku87kxgu48s447z0ryhsyn5rl3yzvfw0d/uhava",
			denom_units: [
				{
					denom: "factory/juno195asgku87kxgu48s447z0ryhsyn5rl3yzvfw0d/uhava",
					exponent: 0
				},
				{
					denom: "hava",
					exponent: 6
				}
			],
			description:
				"Hava Coin is the lifeblood of the Cosmos & Juno networks, rewarding builders and welcoming supporters. https://havacoin.xyz/",
			display: "hava",
			images: [
				{
					png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hava.png"
				}
			],
			logo_URIs: {
				png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hava.png"
			},
			name: "Hava Coin",
			symbol: "HAVA"
		}
	],
	chain_name: "juno"
}
