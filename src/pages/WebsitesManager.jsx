import { useState } from 'react'
import Layout from '../components/Layout'
import './WebsitesManager.css'

export default function WebsitesManager({ onNavigate }) {
  const [freeWebsites, setFreeWebsites] = useState([])
  const [blacklistedWebsites, setBlacklistedWebsites] = useState([])
  
  const [globalRules] = useState([
    { id: 9, name: 'Hilton Free Websites', type: 'whitelist', hostnames: ['hilton.com', 'hiltonapi.com'] },
    { id: 13, name: 'Global', type: 'blacklist', hostnames: ['www.guestek.com'] }
  ])

  const handleAddFreeWebsite = () => {
    console.log('Add Free Website')
    // TODO: Open modal or form
  }

  const handleAddBlacklistedWebsite = () => {
    console.log('Add Blacklisted Website')
    // TODO: Open modal or form
  }

  return (
    <Layout activePage="LOGINS" activeSubPage="Web Site Manager" onNavigate={onNavigate}>
      <div className="websitesManagerPage">
        <div className="pageHeader">
          <h1 className="pageTitle">Websites Manager</h1>
          <p className="pageSubtitle">
            Add, modify and remove free websites and blacklisted websites.
          </p>
        </div>

        {/* Free Websites Section */}
        <section className="websiteSection">
          <div className="sectionHeader">
            <h2 className="sectionTitle">Free Websites</h2>
            <button className="btn btnPrimary" onClick={handleAddFreeWebsite}>
              Add Free Website
            </button>
          </div>

          <div className="tableWrapper">
            <table className="websiteTable">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Hostname</th>
                  <th>URL</th>
                  <th>Display</th>
                  <th>Order</th>
                  <th>Comments</th>
                  <th>Options</th>
                </tr>
              </thead>
              <tbody>
                {freeWebsites.length === 0 ? (
                  <tr>
                    <td colSpan="7" className="emptyState">
                      No free websites configured. Click "Add Free Website" to get started.
                    </td>
                  </tr>
                ) : (
                  freeWebsites.map((website) => (
                    <tr key={website.id}>
                      <td>{website.name}</td>
                      <td>{website.hostname}</td>
                      <td>{website.url}</td>
                      <td>{website.display}</td>
                      <td>{website.order}</td>
                      <td>{website.comments}</td>
                      <td className="optionsCell">
                        <button className="optionBtn">Edit</button>
                        <button className="optionBtn danger">Delete</button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </section>

        {/* Blacklisted Websites Section */}
        <section className="websiteSection">
          <div className="sectionHeader">
            <h2 className="sectionTitle">Blacklisted Websites</h2>
            <button className="btn btnDanger" onClick={handleAddBlacklistedWebsite}>
              Add Blacklisted Website
            </button>
          </div>

          <div className="tableWrapper">
            <table className="websiteTable">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Hostname</th>
                  <th>Comments</th>
                  <th>Options</th>
                </tr>
              </thead>
              <tbody>
                {blacklistedWebsites.length === 0 ? (
                  <tr>
                    <td colSpan="4" className="emptyState">
                      No blacklisted websites configured.
                    </td>
                  </tr>
                ) : (
                  blacklistedWebsites.map((website) => (
                    <tr key={website.id}>
                      <td>{website.name}</td>
                      <td>{website.hostname}</td>
                      <td>{website.comments}</td>
                      <td className="optionsCell">
                        <button className="optionBtn">Edit</button>
                        <button className="optionBtn danger">Delete</button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </section>

        {/* Global Rules Section */}
        <section className="globalRulesSection">
          <div className="rulesHeader">
            <h2 className="sectionTitle">Global Rules</h2>
            <p className="rulesDescription">
              Websites whitelisted <span className="green">(green)</span> and blacklisted{' '}
              <span className="red">(red)</span> for this client through Global Website Manager.
            </p>
          </div>

          <div className="rulesGrid">
            <div className="rulesColumn">
              <h3 className="columnTitle">Website List</h3>
              <div className="rulesList">
                {globalRules.map((rule) => (
                  <div 
                    key={rule.id} 
                    className={`ruleItem ${rule.type === 'whitelist' ? 'whitelist' : 'blacklist'}`}
                  >
                    List ID: {rule.id}, List Name: {rule.name}
                  </div>
                ))}
              </div>
            </div>

            <div className="rulesColumn">
              <h3 className="columnTitle">Hostname</h3>
              <div className="rulesList">
                {globalRules.map((rule) => (
                  <div key={rule.id} className="hostnamesList">
                    {rule.hostnames.map((hostname, index) => (
                      <div 
                        key={index} 
                        className={`hostnameItem ${rule.type === 'whitelist' ? 'whitelist' : 'blacklist'}`}
                      >
                        {hostname.startsWith('*') ? hostname : `* ${hostname}`}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}