module webring::site;

use std::string::String;
use sui::url::{Url, new_unsafe};


const ENotAdmin: u64 = 0;


public struct Site has key, store {
    id: UID,
    admin: ID,
    title: String,
    description: String,
    banner: Option<Url>,
    url: Url
}

public struct SiteCap has key {
    id: UID
}


public fun new(
    title: String,
    description: String,
    banner: Option<String>,
    url: String,
    ctx: &mut TxContext
): SiteCap {
    let site_cap = SiteCap {
        id: object::new(ctx)
    };

    let site = Site {
        id: object::new(ctx),
        admin: object::id(&site_cap),
        title,
        description,
        banner: banner.map!(|banner| new_unsafe(banner.to_ascii())),
        url: new_unsafe(url.to_ascii())
    };

    transfer::share_object(site);

    site_cap
}

public fun remove(self: Site, site_cap: SiteCap) {
    assert!(self.admin == object::id(&site_cap), ENotAdmin);

    let SiteCap { id } = site_cap;

    object::delete(id);

    let Site { id, .. } = self;

    object::delete(id);
}