function addFill(e) {
    progress += e,
    document.getElementById("progressbarfill").style.width = progress + "%",
    progress >= 97 && (document.getElementById("progressbar").style.display = "none")
}
async function run(e) {
    try {
        await runImpl(e)
    } catch (o) {
        addFill(120);
        var a = document.getElementById("resultText");
        a.textContent = "An Error has occured, will be investigated. Contact me for more info.";
        try {
            await logErrorTeam(e)
        } catch (e) {
            a.textContent = "Could not log team number as errored. Please contact benjamin.henricksen@gmail.com or 43050x on Instagram"
        }
        console.log(o)
    }
}
async function runImpl(e) {
    function a(o) {
        if (finishedEval) {
            console.log(o);
            var t = "";
            "" != o && null != o && "undefined" != o && (t = o - S.length),
            tables[e] = tables[e].replace(`<span id="spots${e}"><bold>Loading...<bold></span>`, t),
            null != document.getElementById("spots" + e) && (document.getElementById("spots" + e).innerHTML = t),
            console.log(t)
        } else
            setTimeout(()=>{
                a(o)
            }
            , 500)
    }
    var o = document.getElementById("resultText");
    if ("" != e && null != e)
        if (e = e.toUpperCase(),
        fetchBennyQ("log_team_state_calc", "team=" + e),
        null !== e.match(/[a-zA-Z]/)) {
            var t = fetchJSON(`/v2/events?season%5B%5D=${seasonID}&level%5B%5D=State&per_page=250`)
              , n = fetchJSON(`/v2/teams?number%5B%5D=${e}&myTeams=false`);
            if (null == tables[e] || confirm("Do you want to continue?"))
                if (o.textContent = "Running...",
                document.getElementById("progressbar").style.display = "block",
                progress = -5,
                addFill(SINGLE_PROGRESS_FILL),
                console.log(n),
                null != n)
                    if (n = await n,
                    n = n.data.length > 1 && ("Elementary School" == n.data[0].grade || "VIQRC" == n.data[0].program.code) ? n.data[1] : n.data[0],
                    null != n) {
                        addFill(SINGLE_PROGRESS_FILL);
                        var s = fetchJSON(`/seasons/${seasonID}/skills?grade_level=${n.grade}`)
                          , l = -1
                          , i = "No SKU found";
                        console.log(n);
                        var r = n.location.region;
                        null == r && (r = n.location.country);
                        var d = !1
                          , c = r
                          , m = await getRegionSpotsMid(r);
                        if (addFill(SINGLE_PROGRESS_FILL),
                        console.log(m),
                        s = await s,
                        addFill(SINGLE_PROGRESS_FILL),
                        "Bad Region" == m) {
                            for (const e of s)
                                if (e.team.id == n.id) {
                                    r = e.team.eventRegion;
                                    break
                                }
                            d = !0
                        }
                        if (console.log("region using:", r),
                        t = (await t).data,
                        addFill(SINGLE_PROGRESS_FILL),
                        d) {
                            var g = [];
                            for (f = 0; f < t.length; f++)
                                t[f].location.region == c && (console.log(t[f]),
                                t[f].name.toLowerCase().includes("hs") || t[f].name.toLowerCase().includes("high school") || t[f].name.toLowerCase().includes("é«˜") ? "High School" == n.grade && g.push(t[f]) : t[f].name.toLowerCase().includes("ms") || t[f].name.toLowerCase().includes("middle school") || t[f].name.toLowerCase().includes("ä¸­") ? "Middle School" == n.grade && g.push(t[f]) : g.push(t[f]));
                            var u = r.replace(c, "").toLowerCase();
                            u = u.replace(/[^a-z0-9]/g, ""),
                            console.log(u),
                            console.log(g);
                            for (f = 0; f < g.length; f++)
                                if (console.log(g[f].name),
                                g[f].name.toLowerCase().replace(/[^a-z0-9]/g, "").includes(u)) {
                                    l = g[f].id,
                                    i = g[f].sku,
                                    console.log(i);
                                    break
                                }
                        } else
                            for (var f = 0; f < t.length; f++)
                                if (t[f].location.region == r)
                                    if (t[f].name.toLowerCase().includes("hs") || t[f].name.toLowerCase().includes("high school") || t[f].name.toLowerCase().includes("é«˜")) {
                                        if ("High School" == n.grade) {
                                            l = t[f].id,
                                            i = t[f].sku,
                                            console.log(t[f]);
                                            break
                                        }
                                    } else {
                                        if (!(t[f].name.toLowerCase().includes("ms") || t[f].name.toLowerCase().includes("middle school") || t[f].name.toLowerCase().includes("ä¸­"))) {
                                            l = t[f].id,
                                            i = t[f].sku,
                                            console.log(t[f]);
                                            break
                                        }
                                        if ("Middle School" == n.grade) {
                                            l = t[f].id,
                                            i = t[f].sku,
                                            console.log(t[f]);
                                            break
                                        }
                                    }
                        if (addFill(SINGLE_PROGRESS_FILL),
                        finishedEval = !1,
                        -1 == l) {
                            t = (await fetchJSON(`/v2/events?season%5B%5D=${seasonID}&per_page=250&region=${r}`)).data,
                            console.log(t);
                            for (f = 0; f < t.length; f++)
                                if ("Regional" == t[f].level) {
                                    var h = t[f].name.toLowerCase().includes("hs") || t[f].name.toLowerCase().includes("high school") || t[f].name.toLowerCase().includes("é«˜")
                                      , L = t[f].name.toLowerCase().includes("ms") || t[f].name.toLowerCase().includes("middle school") || t[f].name.toLowerCase().includes("ä¸­");
                                    if (h && !L) {
                                        if ("High School" == n.grade) {
                                            l = t[f].id,
                                            i = t[f].sku,
                                            console.log(t[f]);
                                            break
                                        }
                                    } else {
                                        if (h || !L) {
                                            l = t[f].id,
                                            i = t[f].sku,
                                            console.log(t[f]);
                                            break
                                        }
                                        if ("Middle School" == n.grade) {
                                            l = t[f].id,
                                            i = t[f].sku,
                                            console.log(t[f]);
                                            break
                                        }
                                    }
                                }
                            if (-1 == l)
                                for (f = 0; f < t.length; f++)
                                    if ("National" == t[f].level) {
                                        console.log("NAT", t[f]);
                                        h = t[f].name.toLowerCase().includes("hs") || t[f].name.toLowerCase().includes("high") || t[f].name.toLowerCase().includes("é«˜"),
                                        L = t[f].name.toLowerCase().includes("ms") || t[f].name.toLowerCase().includes("middle") || t[f].name.toLowerCase().includes("ä¸­");
                                        if (h && !L) {
                                            if ("High School" == n.grade) {
                                                l = t[f].id,
                                                i = t[f].sku,
                                                console.log(t[f]);
                                                break
                                            }
                                        } else {
                                            if (h || !L) {
                                                l = t[f].id,
                                                i = t[f].sku,
                                                console.log(t[f]);
                                                break
                                            }
                                            if ("Middle School" == n.grade) {
                                                l = t[f].id,
                                                i = t[f].sku,
                                                console.log(t[f]);
                                                break
                                            }
                                        }
                                    }
                        }
                        var S = (await fetchJSON(`/v2/events/${l}/teams?per_page=150`)).data;
                        if (getSavedSpots(i).then(e=>{
                            a(e)
                        }
                        , ()=>{
                            console.log("ERROR ( somethin with getting State Spots")
                        }
                        ),
                        -1 != l) {
                            addFill(SINGLE_PROGRESS_FILL),
                            tables[e] = "<table id='resultTable'><tr><th>Rank</th><th>Team</th><th>Score</th></tr>";
                            var b = !1;
                            for (const e of S)
                                e.id == n.id && (b = !0);
                            addFill(SINGLE_PROGRESS_FILL);
                            var w = !1;
                            if (b)
                                tables[e] = `Team ${e} is already in State!`,
                                "43050X" == e && (tables[e] += "<br>If you would like an example try 43050B");
                            else {
                                var v = 1;
                                for (const a of s)
                                    if (a.team.eventRegion != r || checkEventForTeam(a, S) || (tables[e] += `<tr><td>${v}</td><td>${a.team.team}</td><td>${a.scores.score}</td></tr>`,
                                    v++),
                                    a.team.id == n.id) {
                                        tables[e] = `Team ${e} is ${v - 1}th out of <span id="spots${e}"><bold>Loading...<bold></span> <span style="text-decoration:underline">currently</span> available slots!` + tables[e];
                                        w = !0;
                                        break
                                    }
                                0 == w && (tables[e] = `Team ${e} did not run skills.` + tables[e]),
                                tables[e] += "</table>"
                            }
                            null == document.getElementById(e) && (document.getElementById("bar").innerHTML += `<div class="barItem disable-text" id="${e}" onclick='selectTable("${e}")'>${e}</div>`),
                            selectTable(e, !0),
                            finishedEval = !0
                        } else
                            o.textContent = "Could Not Find A Regional Tournament!"
                    } else
                        o.textContent = "Invalid Team Name!";
                else
                    o.textContent = "Invalid Team Name!"
        } else
            await runOrganization(e);
    else
        o.textContent = 'Please enter a team number such as "43050X" or 43050'
}
async function fetchJSON(e) {
    requests++;
    var a = await fetch("https://www.robotevents.com/api" + e, {
        headers: headers,
        "Access-Control-Expose-Headers": "*"
    });
    return await a.json()
}
function checkEventForTeam(e, a) {
    for (const o of a)
        if (o.id == e.team.id)
            return !0;
    return !1
}
function selectTable(e) {
    var a = document.getElementById("resultText");
    a.textContent = "Loading...",
    a.innerHTML = tables[e],
    "No Team" != selectedTable && (document.getElementById(selectedTable).style.backgroundColor = "rgba(40, 40, 40, 0.86)"),
    document.getElementById(e).style.backgroundColor = "rgba(30, 30, 30, 1)",
    selectedTable = e
}
async function runOrganization(e) {
    var a = document.getElementById("resultText");
    a.textContent = "Running...",
    document.getElementById("progressbar").style.display = "block",
    progress = -5,
    addFill(MULTIPLE_PROGRESS_FILL);
    var o = fetchJSON(`/v2/events?season%5B%5D=${seasonID}&level%5B%5D=State&per_page=250`)
      , t = fetchJSON(`/seasons/${seasonID}/skills?grade_level=Middle School`)
      , n = fetchJSON(`/seasons/${seasonID}/skills?grade_level=High School`);
    addFill(MULTIPLE_PROGRESS_FILL);
    for (var s = [], l = "ABCDEFGHIJKLMNOPQRSTUVWXYZ", i = 0; i < l.length; i++)
        s.push(e + "" + l[i]);
    t = await t,
    addFill(MULTIPLE_PROGRESS_FILL);
    var r = [];
    for (const e of t)
        s.includes(e.team.team) && r.push(e.team);
    addFill(MULTIPLE_PROGRESS_FILL),
    n = await n,
    addFill(MULTIPLE_PROGRESS_FILL);
    var d = [];
    for (const e of n)
        s.includes(e.team.team) && d.push(e.team);
    if (addFill(MULTIPLE_PROGRESS_FILL),
    d.length > 0)
        region = d[0].region,
        null == region && (region = d[0].country);
    else {
        if (!(r.length > 0))
            return void (document.getElementById("resultText").innerHTML = "Not a valid team number???");
        region = r[0].region,
        null == region && (region = d[0].country)
    }
    var c = !1
      , m = region
      , g = await getRegionSpotsMid(region);
    if (addFill(MULTIPLE_PROGRESS_FILL),
    console.log(g),
    "Bad Region" == g) {
        if (d.length > 0) {
            for (const e of n)
                if (e.team.id == d[0].id) {
                    region = e.team.eventRegion;
                    break
                }
        } else if (r.length > 0)
            for (const e of t)
                if (e.team.id == r[0].id) {
                    region = e.team.eventRegion;
                    break
                }
        c = !0
    }
    var u, f, h = -1, L = -1;
    if (o = (await o).data,
    addFill(MULTIPLE_PROGRESS_FILL),
    c) {
        var S = []
          , b = [];
        for (i = 0; i < o.length; i++)
            o[i].location.region == m && (console.log(o[i]),
            o[i].name.toLowerCase().includes("hs") || o[i].name.toLowerCase().includes("high school") || o[i].name.toLowerCase().includes("é«˜") ? S.push(o[i]) : o[i].name.toLowerCase().includes("ms") || o[i].name.toLowerCase().includes("middle school") || o[i].name.toLowerCase().includes("ä¸­") ? b.push(o[i]) : (S.push(o[i]),
            b.push(o[i])));
        var w = region.replace(m, "").toLowerCase();
        w = w.replace(/[^a-z0-9]/g, ""),
        console.log(w),
        console.log(S),
        console.log(b);
        for (i = 0; i < S.length; i++)
            if (console.log(S[i].name),
            S[i].name.toLowerCase().replace(/[^a-z0-9]/g, "").includes(w)) {
                h = S[i].id,
                u = S[i].sku,
                console.log(u);
                break
            }
        for (i = 0; i < b.length; i++)
            if (console.log(b[i].name),
            b[i].name.toLowerCase().replace(/[^a-z0-9]/g, "").includes(w)) {
                L = b[i].id,
                f = b[i].sku,
                console.log(f);
                break
            }
    } else
        for (var i = 0; i < o.length; i++)
            if (o[i].location.region == region)
                if (console.log(o[i]),
                o[i].name.toLowerCase().includes("hs") || o[i].name.toLowerCase().includes("high school") || o[i].name.toLowerCase().includes("é«˜")) {
                    if (h = o[i].id,
                    u = o[i].sku,
                    -1 != L)
                        break
                } else {
                    if (!(o[i].name.toLowerCase().includes("ms") || o[i].name.toLowerCase().includes("middle school") || o[i].name.toLowerCase().includes("ä¸­"))) {
                        h = o[i].id,
                        L = o[i].id,
                        f = o[i].sku,
                        u = o[i].sku;
                        break
                    }
                    if (L = o[i].id,
                    f = o[i].sku,
                    -1 != h)
                        break
                }
    if (-1 == h && -1 == L) {
        o = (await fetchJSON(`/v2/events?season%5B%5D=${seasonID}&per_page=250&region=${region}`)).data,
        console.log(o);
        for (i = 0; i < o.length; i++)
            if ("Regional" == o[i].level)
                if (o[i].name.toLowerCase().includes("hs") || o[i].name.toLowerCase().includes("high school") || o[i].name.toLowerCase().includes("é«˜")) {
                    if (h = o[i].id,
                    u = o[i].sku,
                    -1 != L)
                        break
                } else {
                    if (!(o[i].name.toLowerCase().includes("ms") || o[i].name.toLowerCase().includes("middle school") || o[i].name.toLowerCase().includes("ä¸­"))) {
                        h = o[i].id,
                        L = o[i].id,
                        f = o[i].sku,
                        u = o[i].sku;
                        break
                    }
                    if (L = o[i].id,
                    f = o[i].sku,
                    -1 != h)
                        break
                }
        for (i = 0; i < o.length; i++)
            if ("National" == o[i].level)
                if (o[i].name.toLowerCase().includes("hs") || o[i].name.toLowerCase().includes("high school") || o[i].name.toLowerCase().includes("é«˜")) {
                    if (h = o[i].id,
                    u = o[i].sku,
                    -1 != L)
                        break
                } else {
                    if (!(o[i].name.toLowerCase().includes("ms") || o[i].name.toLowerCase().includes("middle school") || o[i].name.toLowerCase().includes("ä¸­"))) {
                        h = o[i].id,
                        L = o[i].id,
                        f = o[i].sku,
                        u = o[i].sku;
                        break
                    }
                    if (L = o[i].id,
                    f = o[i].sku,
                    -1 != h)
                        break
                }
    }
    console.log(f, u),
    addFill(MULTIPLE_PROGRESS_FILL),
    stateTeamsHigh = fetchJSON(`/v2/events/${h}/teams?per_page=150`),
    stateTeamsMid = h != L ? fetchJSON(`/v2/events/${L}/teams?per_page=150`) : stateTeamsHigh;
    var v = await getSavedSpots(u)
      , I = await getSavedSpots(f);
    for (currentTeam of (addFill(MULTIPLE_PROGRESS_FILL),
    stateTeamsHigh = (await stateTeamsHigh).data,
    d))
        simpleOneTeam(currentTeam, n, stateTeamsHigh, v, region);
    for (currentTeam of (addFill(MULTIPLE_PROGRESS_FILL),
    stateTeamsMid = (await stateTeamsMid).data,
    r))
        simpleOneTeam(currentTeam, t, stateTeamsMid, I, region);
    for (currentTeam of (addFill(MULTIPLE_PROGRESS_FILL),
    d))
        if (null == tables[currentTeam.team])
            return;
    for (currentTeam of r)
        if (null == tables[currentTeam.team])
            return
}
async function simpleOneTeam(e, a, o, t, n) {
    if (null == tables[e.team] && null != e) {
        tables[e.team] = "<table id='resultTable'><tr><th>Rank</th><th>Team</th><th>Score</th></tr>";
        var s = !1;
        for (const a of o)
            a.id == e.id && (s = !0);
        var l = !1;
        if (s)
            tables[e.team] = `Team ${e.team} is already in State!`;
        else {
            var i = 1;
            for (const s of a)
                if (s.team.eventRegion != n || checkEventForTeam(s, o) || (tables[e.team] += `<tr><td>${i}</td><td>${s.team.team}</td><td>${s.scores.score}</td></tr>`,
                i++),
                s.team.id == e.id) {
                    var r = "(This will be replaced 1-2 days after your request)";
                    "" != t && null != t && "undefined" != t && (r = t - o.length),
                    tables[e.team] = `Team ${e.team} is ${i - 1}th out of ${r} <span style="text-decoration:underline">currently</span> available slots!` + tables[e.team];
                    l = !0;
                    break
                }
            0 == l && (tables[e.team] = `Team ${e.team} did not run skills.`),
            tables[e.team] += "</table>"
        }
        null == document.getElementById(e.team) && (document.getElementById("bar").innerHTML += `<div class="barItem disable-text" id="${e.team}" onclick='selectTable("${e.team}")'>${e.team}</div>`),
        selectTable(e.team, !0)
    }
}
async function getRegionSpotsHigh(e) {
    var a = await (await fetch("/regions.json")).json().regions;
    for (const o of a)
        if (o.region == e)
            return o.high;
    return "Bad Region"
}
async function getRegionSpotsMid(e) {
    var a = (await (await fetch("/regions.json")).json()).regions;
    for (const o of a)
        if (o.region == e)
            return o.middle;
    return "Bad Region"
}
async function getSavedSpots(e) {
    return await (await fetchBennyQ("get_spots_saved", "sku=" + e)).text()
}
async function logErrorTeam(e) {
    return await (await fetchBennyQ("log_error_team", "team=" + e)).text()
}
async function fetchBennyQ(e, a) {
    return await fetch(`https://api.bennyq.com/?request_type=${e}&` + a)
}
var headers = {};
const BEARER = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzIiwianRpIjoiOTUxYzJjODc2Mjg5YjEyZDNkZTAzYTc3NDk5MTVlMTc4MDE1ZDRjMmZiZWM2YWY3NTFkOTgwMWUzZGMwOWE1NDc3MzA1MWNmYzEyNDBmODQiLCJpYXQiOjE2NTYyOTEwMDUuNDQxOTk5OSwibmJmIjoxNjU2MjkxMDA1LjQ0MjAwMywiZXhwIjoyNjAzMDY1ODA1LjQyNjM1ODIsInN1YiI6Ijg5ODQ2Iiwic2NvcGVzIjpbXX0.rau6vgn2Ip0_-nua-g_FfVBOT8HK2K8jm8JQF0UHM07l6auybf8WYTh-VS31o6U0ONmaxm0RojdppwvuxLIB9rgRcshj6kz9VyOulU151BTh-cjAJ2r3Ew9TN0TVXKEVcWptzyLxaPs9N8HEJsMO10G2BxOOs34tr1zGvY7MMY2A8Kg4eHoGtnifMEZXlty9qnY42j2hS8OTafSFgB0UIkCg83aAR5f8hJMn7BJ-yzPkRe-bBrGhzE269H8MKVhC1umkXSbsQn8iItaa-SyvRryQfCqb-2ZiQqLWsZjQxoVq6fbBDdU5YeP6CaGkpYnA8kUXEpR4aSxLOJd_Z3f-5kzm_EjIFlacvWksHPdSWbd9bgj78ypP-_XXvS627K6rv476TT1M7kGG_TPkzgfVuyC2HTx0rG0FKZ39Uxn43yX0Wc2x7Dkq1RpRAcoxSf-yUvnDDlNf3NqFi7gg43VReQEGY3czGk7hGHPD73veB7CLCchwmCmvEciS0AIYDdh2MPjbP39XpFZUPn1FRc0z4V3qJz46TsScr7yMX47GKmd9Uz_xk93v4S6_Phrgmw3Dk1I5MC4lnKi0lBvPALEg_iDbxauRvYcIiN84JeAxu-LlysawOI0HudaJ-FzCaeA3CP6DmaTDvegtYNTZrXbPm02yqyE7l-OLHIrAzjWf07o";
headers["Authorization"] = "Bearer " + BEARER;
var seasonID = 181
  , tables = {}
  , selectedTable = "No Team"
  , progress = 5;
const SINGLE_PROGRESS_FILL = 13.125
  , MULTIPLE_PROGRESS_FILL = 8.75;
var requests = 0;
